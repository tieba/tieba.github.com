function toggle_table(title){
	$(title).next().slideToggle();
}
function toggle_table_alldown(){
	$(".topic_title_link").next().slideDown();
}
function preproc(s){
	return s.replace(/<</g,"&lt;").replace(/>>/g,"&gt;")
}
function init_tbody(info){
	return $("<tbody></tbody>").appendTo($('<table width="100%" class="section_content"></table>').appendTo(info.div));
}

function fill_table(info){
	var tbody=init_tbody(info)
	var table=info.content;
	for(var i=0;i!=table.length;++i){
		var content=table[i];
		var tr=$("<tr></tr>").appendTo(tbody);
		for(var j=0;j!=content.length;++j){
				$("<td align=\"left\" "+
					(j==content.length-1?"colspan=\"100\"":"")+
					"></td>").appendTo(tr)
					.append(content[j]);
		}
	}
}
function fill_info(info){
	var tbody=init_tbody(info)
	var table=info.content;
	var col_width=info.width_f||300;
	for(var i=0;i!=table.length;++i){
		var content=table[i];
		var tr=$("<tr></tr>").appendTo(tbody);
			$("<td width=\""+col_width+"px\" align=\"left\"></td>").appendTo(tr)
				.append("<a "+(content[0]?"target=\"_blank\" href=\""+content[0]:" href=\"javascript:;\"")+"\">"+preproc(content[1])+"</a>");
			$("<td align=\"left\"></td>").appendTo(tr)
				.append(content[2]);
	}
}
function fill_link(info){
	var tbody=init_tbody(info)
	var table=info.content;
	for(var i=0;i!=table.length;++i){
		var content=table[i];
		var tr=$("<tr></tr>").appendTo(tbody);
			$("<td align=\"left\"></td>").appendTo(tr)
				.append("<a target=\"_blank\" href=\""+content[0]+"\">"+content[1]+"</a>");
			$("<td width=\"120px\" align=\"left\"></td>").appendTo(tr)
				.append("<a target=\"_blank\" href=\""+(content[2]?"http://www.baidu.com/p/"+content[2]:"javascript:;")+"\">"+content[2]+"</a>");
	}
}
function fill_qa(info){
	var tbody=init_tbody(info)
	var table=info.content;
	for(var i=0;i!=table.length;++i){
		var content=table[i];
		var tr=$("<tr></tr>").appendTo(tbody);
		var td=$("<td></td>").appendTo(tr);
		$("<a href=\"javascript:;\" onclick=\"$(this).next().next().slideToggle();\">"+(content[1]?"":"[暂无回答]")+content[0]+"</a><br>").appendTo(td);
		$("<div style=\"display:none;\">&nbsp;&nbsp;&nbsp;&nbsp;"+(content[1]?content[1]:"----------------------").split("<br>").join("<br>&nbsp;&nbsp;&nbsp;&nbsp;")+"</div>").appendTo(td);
	}
}

function fill_about(info){
	var tbody=init_tbody(info)
	var table=info.content;
	for(var i=0;i!=table.length;++i){
		var content=table[i];
		var tr=$("<tr></tr>").appendTo(tbody);
		var td=$("<td></td>").appendTo(tr);
		$("<a href=\"javascript:;\" onclick=\"$(this).next().next().slideToggle();\">"+content[0]+"</a><br>").appendTo(td);
		$("<div style=\"display:none;\">&nbsp;&nbsp;&nbsp;&nbsp;"+(content[1]?content[1]:"----------------------").split("<br>").join("<br>&nbsp;&nbsp;&nbsp;&nbsp;")+"</div>").appendTo(td);
	}
}
function id_link(s){
	var l=s.split("/");
	for(var i=0;i!=s.length;++i){
		if(l[i]&&l[i]!="...")
			l[i]="<a target=\"_blank\" href=\""+"http://www.baidu.com/p/"+l[i]+"\">"+l[i]+"</a>";
	}
	return l.join("/");
}
function fill_person(info){
	var tbody=init_tbody(info)
	var table=info.content;
	for(var i=0;i!=table.length;++i){
		var content=table[i];
		var tr=$("<tr></tr>").appendTo(tbody);
			$("<td align=\"left\" style=\"max-width: 300px;\"></td>").appendTo(tr)
				.append(id_link(content[0]));
			$("<td align=\"left\"></td>").appendTo(tr)
				.append(content[1]);
	}
}
function fill_node(info){
	var infos=info.content;
	info.div.css("margin-left","20px");
	for(var i=0;i!=infos.length;++i)try{
		$('<a href="javascript:;" onclick="toggle_table(this);" class="topic_title_link"><h4>'+infos[i].name+'</h4></a>').appendTo(info.div)
		infos[i].div=$('<div class="topic_table_div"></div>').appendTo(info.div)
		if(infos[i].init){
			infos[i].init(infos[i])
		}
		if("expanding" in infos[i]&&infos[i].expanding){
			infos[i].div.slideToggle();
		}
	}catch(e){}
}
function insert_table(){
	for(var i=0;i!=infos.length;++i){
		try{
			$('<a href="javascript:;" onclick="toggle_table(this);" class="topic_title_link"><h3>'+infos[i].name+'</h3></a>').appendTo("#tablearea")
			infos[i].div=$('<div class="topic_table_div"></div>').appendTo("#tablearea")
			if(infos[i].init){
				infos[i].init(infos[i])
			}else{
				infos[i].element=$('<table '+(infos[i].id?'id="table_'+infos[i].id+'"':'')+' width="100%" class="section_content"></table>').appendTo(infos[i].div)
				infos[i].content=tables[infos[i].id]
				infos[i].type(infos[i],infos[i].id)
			}
			if("expanding" in infos[i]&&infos[i].expanding){
				infos[i].div.slideToggle();
			}
		}catch(e){}
	}//'id="table_'+infos[i].id+'
} 
