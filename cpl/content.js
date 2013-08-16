infos=[
	{name:"本吧管理组",id:"admins",init:fill_admin,content:[
		["吧主",['御坂美琴みさか','顶之座__赫卡特']],
		["小吧",['assiss','阿喀琉斯之殇','yxyy3604','寒云似雾','RFrith','彩色の夢∩o∩','zy123987','Hope_20121221_','Laconism','RichSelian']],
		["小编",['EAgleLeo','EGE娘','汇蓝鸟','忆_碎碎念','橘雾华']],
	],expanding:true},
	{name:"本吧吧规",id:"rules",init:fill_rule,content:[
		['发帖提示',
			'* <b>请不要发任何谭书/二级考试相关内容</b><sub>(要发也请不要加上‘二级’这两个字)</sub>',
			'* 把本文看完+看一遍<a href="/common/howtoask.html" target="_blank">提问的智慧</a>',
			'* 请不要在帖子的标题上加任何的无效词(ie.大神,跪,求,急,标题要长,新手,帮忙)',
			'* 在提问贴中说明自己做出的努力(不需要长,把自己的代码或者思路写下来(具体或者大致的都行))',
			'* 尽量在标题中说明具体的问题/错误(ie.无法打开文件，出现乱码...)',
			'* 发代码者请注意自己的代码格式，并且给出足够的诊断信息/截图',
			'* 贴代码的地方:'+
				'<a href="http://gist.github.com/" target="_blank">Gist</a> |'+
				'<a href="http://codepad.org/" target="_blank">Codepad</a> |'+
				'<a href="http://ideone.com/" target="_blank">Ideone</a> |'+
				'<a href="http://pastebin.com/" target="_blank">Pastebin</a>|'+
				'<a href="http://pastebin.mozilla.org/" target="_blank">Mozilla</a>'
		],['其他提示',
			'* 本吧IRC(聊天室): <a href="http://tieba.baidu.com/p/1941867601" target="_blank">介绍</a>, <a href="https://webchat.freenode.net" target="_blank">WebChat</a>[Channels: #c_lang_cn]',
			'* 多用搜索引擎和专业的论坛(google,<a href="http://stackoverflow.com/" target="_blank">stackoverflow</a>...)',
			'* 那些Win7/8用VC6的去装VC2012 Express去(或者Code::Block/CodeLite)',
			'* 为课业所迫必须用VC6的可以用<a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">VirtualBox</a>装一个xp虚拟机然后在上面装VC6'
		],['总则',
			'0.0 本吧规根据<a href="http://tieba.baidu.com/tb/system.html#cnt08" target="_blank">《百度贴吧吧主制度》</a>而制定',
			'0.1 本吧管理组保留吧规的修改与解释权',
			'0.2 请自觉遵守<a href="http://tieba.baidu.com/tb/eula.html" target="_blank">《百度贴吧协议》</a>',
			'0.3 本吧规适用于<b>百度C语言吧（以下称“本吧”）</b>，自公布即日起施行。',
			'0.4 注意言行，尊重他人就是善待自己。',
			'0.5 切勿打击新手，明白强者二字的真正含义。',
			'0.6 伸手党/脑残党/IP党无人权。'
		],['吧务管理',
			'1.1 <i>吧务</i>（吧主和小吧主）按<a href="http://tieba.baidu.com/tb/system.html#cnt08" target="_blank">《百度贴吧吧主制度》</a>和本吧规行使管理本吧的职权。本吧也欢迎其他吧友协助吧务进行管理，共同维护良好的讨论秩序。',
			'2.2 <i>违规行为</i>包括违反中华人民共和国法律法规、百度贴吧协议和本吧规其它条款明令禁止的事项。',
			'2.3 吧务在有合理的理由和符合本吧规规定的前提下拥有以个人观点管理本吧的权利。合理的理由包括但不限于对违规行为的处理。',
			'2.4 吧务管理本吧的操作包括警告、删贴（删除主题和/或回复）、封禁（ID或IP）等。',
			'2.5 吧务应删除构成违规行为的内容；或在存在充分理由时，指出违规后予以暂时保留。',
			'2.6 对于初次违规的吧友，吧务应进行警告。无视警告再犯者和屡教不改者应考虑封禁。故意违规、破坏吧务管理者封禁并加入黑名单。',
			'2.7 吧务在管理本吧、涉及对被管理者的操作时可以不提前通知<a href="http://baike.baidu.com/view/2410019.htm" target="_blank"><i>相对人</i></a>，但有义务回答吧友关于操作的询问，包括执行管理操作的理由。',
			'2.8 吧务人员的共识代表吧务的整体意见。吧务人员意见有分歧时，首先以本吧规的明文规定为准，协商解决。',
			'2.9 对吧规或管理有疑问、查询操作记录或请求对贴子进行删除、恢复和加精等事宜，请私信或at吧务。'
		],['违规样例',
			'[<font style="color:green">删</font>]'+
				'请问我不会数学/英语/读书可以学么？ '+
				'<sub>可以学，不过你会学的很想死的，先学好你的基础学科再说</sub>',
			'[<font style="color:green">删</font><font style="color:orange">循环封</font><font style="color:red">黑名单</font>]'+
				'...回答不可以的滚...'+
				'<sub>(那么请自己离开)</sub>',
			'[<font style="color:green">删</font><font style="color:orange">循环封</font><font style="color:red">黑名单</font>]'+
				'wqnmlgb/人渣/垃圾/白痴'+
				'<sub>(不送)</sub>',
			'[<font style="color:green">删</font><font style="color:orange">封</font>]'+
				'我xxxx可以学C语言吗？（xxxx=现在初二/现在高二/大学毕业了/工作了/是女生/残疾人/蛋痛了/...）'+
				'<sub>(无意义)</sub>',
			'[<font style="color:green">删</font>]'+
				'请问这段代码哪里有错？'+
				'<sub>(麻烦把问题说清楚)</sub>',
			'[<font style="color:green">删</font>]'+
				'请问C语言怎么学？'+
				'<sub>(天知道，看书，敲代码，查资料，或者说别的请自己想)</sub>',
			'[<font style="color:green">删</font>]'+
				'请问谭XX的书可以吗？'+
				'<sub>(除非你想考二级)</sub>',
			'[<font style="color:green">删</font><font style="color:orange">封</font>]'+
				'请问这题怎么写？'+
				'<sub>(不欢迎伸手，请先自己想想)</sub>',
			'[<font style="color:green">删</font><font style="color:orange">封</font>]'+
				'请问这段代码什么意思？'+
				'<sub>(自己去想，否则请说明你自己有什么搞不清楚)</sub>',
			'[<font style="color:green">删</font>]'+
				'有没有QQ群'+
				'<sub>(不欢迎QQ群之类的玩意，请自己找...)</sub>',
			'[<font style="color:green">删</font><font style="color:orange">封</font>]'+
				'小女子请问xxxxxx？'
		],
	],expanding:true},
	{name:"在整理部分的吧规",id:"rules",init:fill_rule,content:[
		['体例说明',
			'* \'*\'为注释/tips；<b>粗体</b>表示强调；<i>斜体</i>表示约定的术语；<font style="color:red;">红字</font>表示真实的警示。',
			'* 吧务对吧规保留著作权。',
			'* 使用<a href="http://zh.wikipedia.org/wiki/Git" target="_blank">Git</a>获取本页的修订<a href="https://github.com/tieba/tieba.github.com/tree/master/cpp" target="_blank">历史记录</a>。',
			'* 最后修订：2013年5月19日。'
		],['以下内容可能被[删贴|封禁|黑名单]',
			'A1.计算机一/<b>二</b>/三/四级考试',
			'A2.作业(包括 课程设计/各种习题/...)',
			'A3.伸手(任何未经努力/思考/查找各种资料的情况下)',
			'A4.不文明发言(任何类型的,别到处脏话)',
			'A5.无尊严/下限的贴(\'求大神\'等)',
		],['说明',
			'V1.二级/作业/课程设计/烂书的习题/... 定义为: 伸手/脑残',
			'V2.伸手贴(包括题目/软件)禁止,请给出具体的思路等',
			'V3.所有骂人的可以直接封',
			'V4.请在提问前先搜索网络和书以及本吧精品区',
			'V5.所有无尊严(跪求)/使用过度的称呼(求大神)的问问题者均被视为轻度脑残党',
		],['封杀',
			'W1.作弊　　　　(任何类型)',
			'W2.广告　　　　(任何商业性或赢利性广告,特殊情况请与吧主商讨)',
			'W3.侵权　　　　(包括各种盗版软件)',
			'W4.不文明者　　(不要求河蟹但是语言文明是有必要的)',
		],['可封',
			'X1.刷屏/凑字　　(任何类型)',
		],['驱逐',
			'Y1.伸手　　　　(任何类型)',
			'Y2.课程设计　　(伸手的一种)',
			'Y3.二级考试　　(请自行移步,C语言吧是属于真正认真学习C语言的人的)',
			'Y4.挖坟　　　　(除了精品贴之外几乎没有豁免权)',
			'Y5.拜师　　　　(书本是最好的老师)',
			'Y6.脑残党　　　(不解释)',
		],['删除',
			'Z1.非免费/开源资源　　 (据说曾经的帖子中漫天飞舞着这种玩意,条件搜索去吧)',
			'Z2.纯拜吧贴,纯刷经验贴 (不是说不允许而是说烦人...)',
			'Z3.过分脑残的标题　　　(故意长标题,故意制造醒目效果的问题,由管理组自行确定)',
			'Z4.QQ,邮箱,群　　　　　(包括供求资源,请使用网盘)',
			'Z5.无脑问题　　　　　　(未经思考的愚蠢问题,请发这种问题的人自行搜索)',
			'Z6.坚持贴　　　　　　　(能坚持的人没必要发,不能坚持的发了也没用)',
			'Z7.所有VC6/谭书/低质量视频教程有关贴(包括问题)',
		],['讨论形式',
			'* 提问请先看：<a href="/common/howtoask.html" target="_blank">提问的艺术</a>。',
			'3.1 本吧主题为C语言及其它程序设计、软件开发、计算机科学和基础学科的一般话题，包括但不限于疑问求助、技术讨论、书籍评论、成果展示、行业新闻等。',
			'3.2 为维护讨论秩序，本吧贴子列表首页的内容一般应主要为近期活跃的和本吧主题相关的讨论内容。对此造成不利影响的行为视为<i>影响版面</i>。影响版面的贴子由吧务定性，视情况予以保留或删除，但不得以此为由封禁。',
			'3.3 <i>吧务贴</i>是吧务人员、管理操作和吧规制定及解释直接相关的讨论。',
			'3.4 除非能证明吧务管理存在过错，公开质询吧务的吧务贴被视为影响版面。',
			'3.5 讨论内容不属于本吧主题及相关内容，没有构成违规行为，也不是吧务贴的贴子为<i>水贴</i>。',
			'3.6 本吧不禁止水贴，但请注意节制，保持适当有意义的内容。不要过于频繁发水贴。',
			'3.7 通过回复、点“赞”等方式使贴子出现在首页上方的行为为<i>顶贴</i>。',
			'3.8 主题或最后回复在一个自然月前的贴子为<i>坟贴</i>。对坟贴的顶贴为<i>挖坟</i>。',
			'3.9 重复发相同内容的帖子，吧务应视情况保留其一。',
			'3.10 本吧内贴子删除功能应仅用于维护正常讨论秩序，即删除明显的违规、重复或另有约定的内容，不得用于在吧规许可的范围外作为限制特定吧友发言的手段。',
			'3.11 对于较长的主题文章需要多个连续回复进行发布时，为预防打断文章内容的<i>插楼</i>（不含楼中楼）回复，楼主可在前几楼显眼处预告删除插楼者。预告在24小时内文章内容未发布完全时，对吧务操作内容以外的实际插楼内容有效（不需要提供其它删除理由）。',
			'3.12 吧务或非吧务人员在本吧删除其他正常回复的，若能提供证据，吧友有权要求删除者解释；确认误删的，吧主应予以恢复；无合理理由删除的，吧务可视情况对删除者予以警告或封禁。'
		],['禁止内容',
			'4.1 以下行为无条件视为违规行为：作弊；伸手；侵权；（包括ID中的）不文明言行。',
			'4.2 以下行为视为违规行为，除非提前通知并得到吧务批准：拜师；对非精品主题的挖坟；广告。',
			'4.3 本吧封杀有关课程设计的贴子，包括求程序、代码、详细设计思路等。',
			'4.4 本吧不支持作弊行为，所有考试求助贴一律删除。',
			'4.5 广告内容不分私人广告和商业广告，一律删除（包括QQ群、论坛的推广等）。对和本吧主题相关的贴吧贴子和个人项目的宣传，吧务可根据具体内容不视为广告。',
			'4.6 禁止标题长度不大于4字节的主题贴。贴子内容不限制字数。',
			'4.7 禁止贴子标题故意出现吸引目光的字符（如火星文）。禁止贴子标题或内容出现大片重复或无意义文本。',
			'4.8 过于影响版面的水贴会被删除。',
			'4.9 过于影响版面的或有意的多次挖坟应被封禁。',
			'4.10 禁止发布类似任何邮箱地址分享文件的贴子。',
			'4.11 发生争吵、吧务调解无效，无视警告仍然继续的争吵贴子。',
			'4.12 以下附则中规定的（典型）违规样例。'
		],['发贴建议',
			'5.1 发代码者请注意自己的代码格式。注意百度一般无法保证代码的缩进和对齐，对阅读带来不便时应该尽量避免直接贴代码。替代手段：短代码请贴'+
				'<a href="http://gist.github.com/" target="_blank">Gist</a> |'+
				'<a href="http://codepad.org/" target="_blank">Codepad</a> |'+
				'<a href="http://ideone.com/" target="_blank">Ideone</a> |'+
				'<a href="http://pastebin.com/" target="_blank">Pastebin</a>'+
				'，长代码推荐公开的在线代码托管服务或网盘。',
			'5.2 从某种意义上来说程序和数学题一样，是拿来给别人看的，请发关键的代码问题部分，太长且不带任何注释说明的代码容易让人不适。另外编译错误多数是由于自己的粗心大意造成的语法错误，自己读编译器的说明就能解决。',
			'5.3 在提问贴中说明自己做出的努力（不需要长，把自己的代码或者思路写下来）。',
			'5.4 把本文看完，然后看一遍《提问的艺术》。',
			'5.5 多用搜索引擎(Google)和专业的论坛(StackOverflow...)'
		],
	],expanding:false},
	{name:"新手教程",id:"nbtutorial",init:fill_link,content:[
		["http://tieba.baidu.com/p/1165625989","解读御坂美琴みさか的菱形打印程序——谈如何学习算法","咱是仙人"],
		["http://tieba.baidu.com/p/1109535412","xxx管理系统(作业党你们懂的,伸手杀无赦)","RichSelian"],
		["http://tieba.baidu.com/p/1098980046","教你构建MinGW＋Notepad++编程环境 for C/C++","5B4B铅笔"],
		["http://tieba.baidu.com/p/1570864020","调试指南(问问题之前请自重)","九头一存"],
		["http://tieba.baidu.com/p/1393147869","链表","万能姬"],
		["http://hi.baidu.com/misaka20001/item/d4a4144036d5fbefbdf451de","[文]某吧主的学习经历","御坂美琴みさか"],
		["http://tieba.baidu.com/f/good?kw=c%D3%EF%D1%D4","更多请阅读'本吧精品区'",""],
	],expanding:true},
	{name:"给新手的Q&amp;A",init:fill_qa,content:[
		["我现在在读xx[学校/年级...]，能不能C语言",
			"能: 如果你愿意<i>浪费</i>时间在程序的苦海之中, 有兴趣坚持走下去, 并且有一定的数学基础"+"<br>"+
			"不能: C语言对于很多人而言<b>真的很难</b>"+"<br>"+
			"你可以去学,学不学得了是你自己的问题"
		],
		["学C语言该如何入门","看书, 读代码, 敲代码, Wikipedia, csdn, 本吧精品区, Google, Bing, Baidu"],
		["为神马推荐《C Primer Plus》而不推荐销量干万的《C程序设计》","不是说崇洋媚外，不是外国书就没错误了，只是《C程序设计》的概念性错误太多了"],
		["看完了谭的《C程序设计》(或类似)请问下一步该做什么",
			["考二级: 够了，不用学别的了","学校课程要求的，以后不用: 随你","学了要用的: 好吧[扔掉/烧掉/埋掉]随你,具体请看'书籍简介'"].join("<br>")
		],
		["C语言,C++,Java,Python,XXX,YYY改如何选择","自己试去<sub>ps.其实Python是个不错的入门选择</sub>"],
		["怎么样逃离可怕的黑框框","命令行挺好的，实在要图形的话自己去搜GUI/D3D/GDI/OpenGL/QT/GTK..."],
		["关于(i++)+(++i),printf(\"%d%d%d\",++i,i,i++),i+=i*=i","警告: 别写(除了某些特殊情况,没人能保证这些类型的玩意会出现神马问题,参见《C陷阱与缺陷》)"],
		["C语言有前(钱)途么","看你学的怎么样&找的工作怎么样"],
		["32/64位Windows xp/7/8该用神马软件","集成开发环境介绍的基本都可以"],
		["找VC6?为什么不应该用VC6，以及为什么VC6的兼容性如此之差","和Window98同样的道理(话说XP都到该被淘汰的时候了)"],
		["有什么图形库","EGE神马的挺好的(参见吧友作品)"],
		["学C语言要多久","一天(如果只是看语法定义的话),当然,别以为能很轻松的在几年内精通"],
	],expanding:true},
	common_info.contact, // 友情贴吧&联络方式
	common_info.books, // 书籍介绍
	common_info.hardware, // 硬件介绍
	common_info.operating_system, // 操作系统
	common_info.software, // 软件介绍
	common_info.project, // 吧友作品(项目)
	{name:"吧友作品",init:fill_link,content:[
		["http://code.google.com/p/comprox/","Comprox - 肉牛的压缩机","RichSelian"],
		["http://misakamm.github.com/xege/","EGE(Easy Graphics Engine) - 炮姐的图形库","御坂美琴みさか"],
		["http://tieba.baidu.com/p/1535637800","四则计算器(其实人都是慢慢改进的)","c_vs"],
		["http://tieba.baidu.com/p/1894817975","LL1表达式计算器","御坂美琴みさか"],
		["http://tieba.baidu.com/p/1977678397","拼图游戏","忆_碎碎念"],
	]},
	{name:"吧友语录",init:fill_about,content:[
		["我是不是师兄:关于挂科",[
			"好吧 我的老毛病又犯了",
			"挂科队形 尾巴加一 C挂科",
			"1 挂科不代表没天赋[尤其是C课的补考 展开点说 有时候真的是题目本身是错的你信不信]",
			"2 学C[或者其他任何东西都]需要很多东西 但是唯独不需要天赋",
			"3 忘掉关于天赋的各种神奇的传说吧 每一个人都是从mian函数和少;开始一步一步战斗",
			"4 数组正确起点其实是0不是1",
			"5 '\\0'[学C应该懂]"
		].join("<br>")],
		["一招秒神:帖子的标题",[
			"如果能在帖子的标题中正确有效的表达出你想问的问题而不是每天大神大哥小弟帮帮忙什么的，你觉得会被删么?",
			"如果能在帖子的正文中清晰有序对说明你自己的思考过程（写注释最好），和自己思考时遇到的断点，吧友们会很乐意帮忙指点的，而不是贴出一段代码就伸手要答案要结果帮忙改错。",
			"你真当这里是免费人肉编译器？"
		].join("<br>")]
	]},
	{name:"人物简介&马甲",init:fill_person,content:[
		["RichTextBox/RichSelian/EGG娘","ROX-滚床压缩肉牛[<a href=\"https://github.com/richox\" target=\"_blank\">richox</a>]<sub>妹纸：某度娘HR //FIXME: @NailesHcir</sub>"],
		["寒云似雾/灵风竹/TetrisNoOSer","某个大水笔葱[<a href=\"https://github.com/hysw\" target=\"_blank\">hysw</a>]"],
		["5230娘/顶之座__赫卡特/灼发の夏娜","hecate/彩夏/ayaka/毛球<sub>日语巨触</sub>"],
		["幻の上帝/FrankHB","圆滚滚的工口帝球葱[<a href=\"https://bitbucket.org/frankhb/\" target=\"_blank\">frankhb</a>][<a href=\"https://github.com/FrankHB\" target=\"_blank\">FrankHB</a>]"],
		["御坂美琴みさか/EGE娘","misaka-传说中的炮姐[<a href=\"https://github.com/misakamm\" target=\"_blank\">misakamm</a>]"],
		["Hope_20121221_","某个小正太[<a href=\"https://github.com/hope1\" target=\"_blank\">hope1</a>]"],
		["那曲闲愁",""],
		["别急还没硬",""],
		["EAgleLeo",""],
		["我是不是师兄",""],
		["_craftG/良化纲领_/阎魔抽/serviper/九头一存/帕斯科维/H之读姬/Razielize/oxdead/Raptor酱/扯蛋的Aria/Xenoneee/九重束风景/攻城尸_/万能姬/守尸神主/...","撸之羊驼[<a href=\"https://github.com/Akvelog\" target=\"_blank\"fi>Akvelog</a>]"],
		["bc12358",""],
		["Laconism","简练之格言[<a href=\"https://github.com/laconism\" target=\"_blank\">laconism</a>]"],
		["yxyy3604",""],
		["忆_碎碎念",""],
		["汇蓝鸟","面麻<sub>酱</sub> (英文+图形+...)"],
		["幽罹焰","<sub>jr</sub>rmz"],
		["灼眼的超哥",""],
		["zy123987",""],
		["wysaid","好像在搞3D(gl还是dx)似得"],
		["User32","被揉坏掉了的冰凉小脸"],
		["星月and圣冰雨","算法大牛"],
		["Luoji_1995","GJK-逻辑神最近不知道去哪了"],
		["assiss","C语言吧元老<sub>似乎有女儿以后就很少来了……</sub>"],
		["阿宾和白洁/5320娘/N97娘/近卫_史菜/LoadLibrary/...","已经彻底坏掉了"],
		["ZD_Tinson",""],
		["NEMESIS_T2",""],
		["Lemoneee/Gilliland/SergeiSobolev/...","好久没出现的G算姬[<a href=\"https://github.com/Golevka\" target=\"_blank\">Golevka</a>]"],
		["彩色の夢∩o∩/哀傷之月","数学娘、别字娘、正体字娘<sub>伪娘</sub>"],
		["怪兽大战魔人","编译器大神"],
		["NaylonSlain",""],
		["MasterRay",""],
		["8pm",""],
		["gccer","史前大牛<sub>比揉揉牛更早顶着gnu的头像</sub>"],
		["CIW_BLUE",""],
		["矮油嫑酱紫唉","法律<sub>好似是婚姻法</sub>人士在这里"],
		["nadesico19","C菌-日语巨触[<a href=\"https://github.com/nadesico19\" target=\"_blank\">nadesico19</a>]"],
		["Coding狂人","好似很久以前被气走了"],
		["LH_Mouse_EX/乐天派的小耗子","玩窗户<sub>Win</sub>的耗吱"],
		["关签","灿烂的大菊<sub>花</sub>长"],
		["陆umj",""],
		["Padme0Amidala","某著名大水笔"],
		["凤凰院红旗","水货一枚[<a href=\"https://github.com/HououinRedflag\" target=\"_blank\">HououinRedflag</a>]"],
		["风之追梦者/梅汁追求者",""],
		["jingyingbox",""],
		["patricia_xiao/Carbucketty","某pku经验收集者...<sub>祭音_INoRi 的评语: 自从来C第一次见到1K+的帖子...</sub>"],
		["HGtz2222",""],
		["whatofor",""],
		["⑨chu","[<a href=\"https://github.com/9chu\" target=\"_blank\">9chu</a>]"],
		["卩s灬飞飞",""],
		["傻渡娘","<sub>汉纸：啪啪熊</sub>"],
		["china_gll",""],
		["萧の十三郎",""],
		["",""],
	]},
	{name:"概念与纠错",init:fill_link,content:[
		["http://tieba.baidu.com/p/1411238421","ISO C的一些基本概念","幻の上帝"],
		["http://tieba.baidu.com/p/1422487681","ISO C11附录C","幻の上帝"],
		["http://tieba.baidu.com/p/1969958655","关于main函数的原型和返回值(void main vs int main)","幻の上帝"],
	]},
	{name:"各种教程",init:fill_link,content:[
		["http://tieba.baidu.com/p/1597468718","适合新手练习的几个题目，控制台不再单调呵呵（持续更新）","Geodesic"],
		["http://tieba.baidu.com/p/2025276932","对拼图问题可还原性的探究","忆_碎碎念"],
		["http://tieba.baidu.com/p/2007516908","C语言递归调用转化为栈处理的一般式","elf0223"],
		["http://tieba.baidu.com/p/2092645577","辅助的原理","霸气外露真没有"],
		["http://tieba.baidu.com/p/1313731304","C语言180行随机迷宫代码 详解+分析","追忆曾经_"],
		["http://tieba.baidu.com/p/1360685329","扫雷","wysaid"],
		["http://tieba.baidu.com/p/1972512091","〔九重的百物语之二〕A cellular compiler","守尸神主"],
		["http://tieba.baidu.com/p/2194826437","【解】面码与万恶的商人砝码","汇蓝鸟"],
		["http://tieba.baidu.com/p/1797769781","【新手进阶】话说那些聊天与游戏的网络交互实现","汇蓝鸟"],
		["http://tieba.baidu.com/p/1798139204","【初入老鸟】那些网游外挂中大大小小的远程call","汇蓝鸟"],
		["http://tieba.baidu.com/p/1852969320","【游戏编程】构架游戏中的粒子系统","汇蓝鸟"],
		["http://tieba.baidu.com/p/1795338852","【新手教程】用C语言制作单机游戏外挂","汇蓝鸟"],
		["http://tieba.baidu.com/p/1868393695","【音乐编程】基于DirectSound的音乐播放与FFT频谱可视化(part 1)","汇蓝鸟"],
		["http://tieba.baidu.com/p/1885477077","【音乐编程】基于DirectSound的音乐播放与FFT频谱可视化(part 3)","汇蓝鸟"],
		["http://tieba.baidu.com/p/1906977428","【音乐编程】播放器频谱可视化与语音的智能识别思想(part 3)","汇蓝鸟"],
		["http://tieba.baidu.com/f/good?kw=c%D3%EF%D1%D4","更多请阅读'本吧精品区'",""],
	]},
	common_info.about_NCRE2, // 关于二级
	common_info.about_Tan, // 关于谭书
	{name:"其他",init:fill_link,content:[
		["http://tieba.baidu.com/p/13382217","原问题资料大全","vc99"],
		["http://tieba.baidu.com/p/1620654727","螺旋方阵","寒云似雾"],
		["http://netlib.bell-labs.com/cm/cs/pearls/index.html","《编程珠玑》(适合有一定数据结构和算法基础的)",""],
		["http://c-faq-chn.sourceforge.net/","C语言常见问题集/495个C语言问题",""],
	]},
	{name:"Credits",init:fill_link,content:[
		["http://tieba.baidu.com/p/1941867601","IRC频道","..."],
		["rox.html","ROX版","RichSelian"],
		["https://github.com/tieba/tieba.github.com","本页源码","寒云似雾"],
		["https://github.com/","Hosted on GitHub Pages &mdash; Theme by <a href=\"http://twitter.com/#!/michigangraham\">mattgraham</a>",""],
	]},
]
