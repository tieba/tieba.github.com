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
	return '<a href="#">%s</a>'%(s)

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
			"</head>")
def body(info):
	return "<body>",menu(info),content(info),"</body>"
def menu(info):
	l=[]
	for i in info:
		if "type" in i and i["type"]=="link-only":
			l+=[(i["link"],i["name"])]
		else:
			if "side-name" in i:
				l+=[("#"+i["link"],i["side-name"])]
			else:
				l+=[("#"+i["link"],i["name"])]
	return ('<div id="left_container"><ul class="memu_container">',
		['<li class="menu_item"><a href="%s">%s</a></li>'%i for i in l],
		'</ul></div>')
cardgen={
	"linkdesc":lambda x:'<a href="%s">%s</a>: %s<br>'%tuple(x["content"]),
	"linkdesc-list":lambda x:['<a href="%s">%s</a>: %s<br>'%tuple(i) for i in x["content"]],
	"linkdesc-block":lambda x:standard_wrap(['<a href="%s">%s</a>: %s<br>'%tuple(i) for i in x["content"]])
}
def gen_cards(il):
	l=[]
	for i in il:
		l.append(gen_card(i))
	return l
def gen_card(unit,toplevel=False):
	if isinstance(unit,list):
		return ('<div class="content_card">',gen_cards(unit),"</div>")
	elif isinstance(unit,dict):
		l=[]
		if "name" in unit:
			l+=['<a href="javascript:;" onclick="toggle_table(this);" class="topic_title_link" style="text-align:center"><%s>%s</%s></a>'%(
				"h2" if toplevel else "h3",
				unit["name"],
				"h2" if toplevel else "h3"
			)]
		if "type" in unit and unit["type"] in cardgen:
			if "hide" in unit:
				l.append(("<div hidden>",cardgen[unit["type"]](unit),"</div>"))
			else:
				l.append(cardgen[unit["type"]](unit))
		else:
			l+=[('<div class="content_card" %s>'%("hidden" if "hide" in unit else ""),gen_cards(unit["content"]),"</div>")]
		return tuple(l)
	else:
		if unit.startswith("http://"):
			unit='<a href="%s">%s</a>'%(unit,unit)
		return unit+"<br>"

def standard_wrap(content):
	return (
		'<div class="content_card">',
			content,
		"</div>")
		
def topic_standard_wrap(content,i):
	return (
		'<a name="%s"></a>'%i["link"],
		'<a href="javascript:;" onclick="toggle_table(this);" class="topic_title_link" style="text-align:center"><h2>%s</h2></a>'%i["name"],
		('<div class="content_card">',
			content,
		"</div>")
	)
def content(info):
	l=[]
	for i in info:
		if "type" in i and i["type"] in initfuncs:
			print(i["type"],file=sys.stderr)
			l+=[initfuncs[i["type"]](i)]
		elif "content" in i:
			print(">",i["name"],file=sys.stderr)
			l+=[(
				'<a name="%s"></a>'%i["link"],
				gen_card(i,toplevel=True)
			)]
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

env=json.load(open("template.json"))

print(printhtml(html(env)))

