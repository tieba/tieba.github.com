"""
<head>
			<title>%{title}</title>
			<meta http-equiv="Content-Type" content="text/html; charset=%{charset}"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
			%{stylesheet[<link rel="stylesheet" href="%%">]}
			%{javascript[<script src="%%"></script>]}
	</head>
"""

import json
import sys
env=None
flags={}

def admins(x):
	l=[]
	for i in env[".admins"]:
		l.append(
			("<tr>",
				'<td width="40px" align="left">%s:</td>'%i[0],
				'<td>',[tbid(i) for i in i[1]],'</td>',
			"</tr>"))
	return (
		'<table width="100%"><tbody>',
		l,
		"</tbody></table>")

def people(x):
	l=[]
	for i in x:
		l.append(
			("<tr>",
				'<td align="left" style="max-width: 300px;">%s:</td>'%("/".join(tbid(j) for j in i[0].split('/'))),
				'<td>',i[1],'</td>',
			"</tr>"))
	return (
		standard_wrap(admins(None)),
		standard_wrap(('<table width="100%"><tbody>',
		l,
		"</tbody></table>")))
	
initfuncs={
	"table-admins":lambda x:topic_standard_wrap(admins(x["content"]),x),
	"table-people":lambda x:topic_standard_wrap(people(x["content"]),x),
}

def tbid(s):
	return '<a href="http://tieba.baidu.com/home/main?un=%s&fr=frs&ie=utf-8">%s</a>'%(s,s)

def html(info):
	return ("<html>",[head(info["head"]),body(info["body"])],"</html>")
def head(info):
	return ("<head>",
			[
				'<title>%(title)s</title>'%info,
				'<meta http-equiv="Content-Type" content="text/html; charset=%(charset)s"/>'%info,
				'<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">'
			],
			[	'<link rel="stylesheet" href="%s">'%i for i in info["stylesheet"]],
			[	'<script src="%s"></script>'%i for i in info["javascript"]],
			"</head>") if "--mobile" not in flags and "-m" not in flags else ("<head>",
			[
				'<title>%(title)s</title>'%info,
				'<meta http-equiv="Content-Type" content="text/html; charset=%(charset)s"/>'%info,
				'<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">'
			],
			[	'<link rel="stylesheet" href="%s">'%i for i in info["stylesheet-mobile"]],
			[	'<script src="%s"></script>'%i for i in info["javascript-mobile"]],
			"</head>")

def body(info):
	return "<body>",menu(info),content(info),"</body>"
def menu(info):
	l=[]
	for i in info:
		try:
			if "type" in i and i["type"]=="link-only":
				l+=[(i["link"],i["name"])]
			else:
				if "side-name" in i:
					l+=[("#"+i["link"],i["side-name"])]
				else:
					l+=[("#"+i["link"],i["name"])]
		except KeyError:
			print("menu::KeyError",file=sys.stderr)
	return ('<div id="left_container"><ul class="memu_container">',
		['<li class="menu_item"><a href="%s">%s</a></li>'%i for i in l],
		'</ul></div>')
def lkdesclst(x):
	l=[]
	for i in x:
		l.append(
			('<tr>',
				'<td><a href="%s">%s</a><br></td>'%(i[0],i[1]),
				'<td align="right" style="text-align:right">',i[2],'</td>',
			"</tr>"))
	return ('<table width="100%" class="lkdescblk"><tbody>',
		l,
		"</tbody></table>")

def lkdescblk(x):
	l=[]
	for i in x:
		l.append(
			('<tr>',
				'<td><a href="%s">%s</a><br></td>'%(i[0],i[1]),
				'<td align="right" style="text-align:right">',i[2],'</td>', #TODO add tbid part
			"</tr>"))
	return ('<table width="100%" class="lkdescblk"><tbody>',
		l,
		"</tbody></table>")
	
#	"linkdesc-block":lambda x:topic_standard_wrap((x["content"]),x),
cardgen={
	"import-html":lambda x,y:standard_wrap(open(x["content"], 'r', encoding = 'utf-8').read(),y),
	"linkdesc":lambda x,y:'<a href="%s">%s</a>: %s<br>'%tuple(x["content"]),
	"linkdesc-list":lambda x,y:standard_wrap(lkdesclst(x["content"]),y),
	"linkdesc-block":lambda x,y:standard_wrap(lkdescblk(x["content"]),y)#['<a href="%s">%s</a>: %s<br>'%tuple(i) for i in x["content"]],y)
}
def gen_cards(il):
	l=[]
	for i in il:
		l.append(gen_card(i))
	return l
def gen_card(unit,toplevel=False):
	try:
		if isinstance(unit,list):
			return ('<div class="content_card">',gen_cards(unit),"</div>")
		elif isinstance(unit,dict):
			l=[]
			g=""
			if "name" in unit:
				g='<a href="javascript:;" onclick="toggle_table(this);" class="topic_title_link" style="text-align:center"><%s>%s</%s></a>'%(
					"h2" if toplevel else "h3",
					unit["name"],
					"h2" if toplevel else "h3"
				)
			if "type" in unit and unit["type"] in cardgen:
				if "hide" in unit and ("-m" in flags or "--mobile" in flags or unit["hide"]=="force"):
					l.append(g)
					l.append(("<div hidden>",cardgen[unit["type"]](unit,""),"</div>"))
				else:
					l.append(cardgen[unit["type"]](unit,g))
			else:
				l+=[('<div class="content_card" %s>'%("hidden" if ("hide" in unit and ("-m" in flags or "--mobile" in flags or unit["hide"]=="force")) in unit else ""),g,"<div>",gen_cards(unit["content"]),"</div>","</div>")]
			return tuple(l)
		else:
			if unit.startswith("http://"):
				unit='<a href="%s">%s</a>'%(unit,unit)
			return unit+"<br>"
	except KeyError:
		print("KeyError",file=sys.stderr)
		return ()

def standard_wrap(content, title=""):
	return (
		'<div class="content_card">',
		title,
		'<div>',
			content,
		"</div>",
		"</div>")
		
def topic_standard_wrap(content,i):
	return (
		'<div class="content_card">',
		'<a name="%s"></a>'%i["link"],
		'<a href="javascript:;" onclick="toggle_table(this);" class="topic_title_link" style="text-align:center"><h2>%s</h2></a>'%i["name"],
		'<div>',
			content,
		'</div>',
		"</div>"
	)
def content(info):
	l=[]
	for i in info:
		if "type" in i and i["type"] in initfuncs:
			print(i["type"],file=sys.stderr)
			l+=[initfuncs[i["type"]](i)]
		elif "content" in i:
			print(">",i["name"],file=sys.stderr)
			if "link" in i:
				l+=[(
					'<a name="%s"></a>'%i["link"],
					gen_card(i,toplevel=True)
				)]
			else:
				l.append(gen_card(i,toplevel=True))
	return ('<div id="right_container">',l,'</div>')


def formathtml(x,level=0):
	l=[]
	for i in x:
		if isinstance(i,tuple):
			l+=formathtml(i,level)
		elif isinstance(i,list):
			l+=formathtml(i,level+1)
		else:
			l+=["\t"*level+i]
	return l


def printhtml(x):
	return "\n".join(formathtml(x,0))

print(sys.argv,file=sys.stderr)
for i in sys.argv[1:]:
	if len(i)>=1 and i[0]=="-":
		if len(i.split("="))==2:
			flags[i]=i.split("=")[1]
		else:
			flags[i]="True"
print(flags,file=sys.stderr)
env = json.loads(sys.stdin.buffer.read().decode(), encoding = 'utf-8')

sys.stdout.buffer.write(printhtml(html(env)).encode('utf-8') + b"\n")


"""

	"":[
		{"type":"head",
			"title":"索引",
			"charset":"utf-8",
			"stylesheet":[
				"../stylesheets/styles.css",
				"../stylesheets/pygment_trac.css",
				"../stylesheets/styles_new.css"
			],
			"javascript":[
				"../javascripts/jquery.min.js",
				"../javascripts/respond.js",
				"../javascripts/table.js",
				"../common/content.js",
				"content.js"
			]
		},{"type":"body","":[
			{"type":"card","title":"本吧吧规","anchor":"rules","name":"C语言吧 吧规","":[
				{"type":"card","title":"总则","":[[
					"0.0 本吧规根据<a href=\"http://tieba.baidu.com/tb/system.html#cnt08\" target=\"_blank\">《百度贴吧吧主制度》</a>而制定",
					"0.1 本吧管理组保留吧规的修改与解释权","0.2 请自觉遵守<a href=\"http://tieba.baidu.com/tb/eula.html\" target=\"_blank\">《百度贴吧协议》</a>",
					"0.3 本吧规适用于<b>百度C语言吧（以下称“本吧”）</b>，自公布即日起施行。",
					"0.4 注意言行，尊重他人就是善待自己。(所有辱骂均视为永久封紧的对象)",
					"0.5 切勿打击新手，明白强者二字的真正含义。",
					"0.6 伸手党/脑残党/IP党无人权。",
					"0.7 吧务允许以个人意愿\"合理\"的使用他/她所有的权利。",
					"*.* 以下内容作为总则的补充，原则上与总则相同"
				]]},
				{"type":"card","title":"发帖提示","":[[
					"* <b>请不要发任何谭书/二级考试相关内容</b><sub>(要发也请不要加上‘二级’这两个字)</sub>",
					"* 把本文看完+看一遍<a href=\"/common/howtoask.html\" target=\"_blank\">提问的智慧</a>",
					"* 请不要在帖子的标题上加任何的无效词(ie.大神,跪,求,急,标题要长,新手,帮忙)",
					"* 在提问贴中说明自己做出的努力(不需要长,把自己的代码或者思路写下来(具体或者大致的都行))",
					"* 尽量在标题中说明具体的问题/错误(ie.无法打开文件，出现乱码...)",
					"* 发代码者请注意自己的代码格式，并且给出足够的诊断信息/截图",
					"* 贴代码的地方:<a href=\"http://gist.github.com/\" target=\"_blank\">Gist</a> |<a href=\"http://codepad.org/\" target=\"_blank\">Codepad</a> |<a href=\"http://ideone.com/\" target=\"_blank\">Ideone</a> |<a href=\"http://pastebin.com/\" target=\"_blank\">Pastebin</a>|<a href=\"http://pastebin.mozilla.org/\" target=\"_blank\">Mozilla</a>"
				]]},
			]}
		]}
	],
	"""