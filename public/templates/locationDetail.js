(function(){dust.register("locationDetail",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container location-detail\"><div class=\"row\"><div role=\"main\"><section class=\"location-header\"><div class=\"header\" style=\"background-image: url(").reference(ctx.getPath(false, ["data","location","fullScreen","url"]),ctx,"h").write(");\"><h1>").reference(ctx.getPath(false, ["data","location","name"]),ctx,"h").write("</h1></div><p>").reference(ctx.getPath(false, ["data","location","about"]),ctx,"h").write("</p></section><h2 class=\"padding-10\">Popular Videos</h2><ul class=\"list-unstyled videos-list\">").section(ctx.getPath(false, ["data","videos"]),ctx,{"block":body_1},null).write("</ul></div></div></div>");}function body_1(chk,ctx){return chk.write("<li><a href=\"/locations/").reference(ctx.getPath(false, ["data","location","slug"]),ctx,"h").write("/videos/").reference(ctx.get(["_id"], false),ctx,"h").write("/").reference(ctx.get(["slug"], false),ctx,"h").write("\"><div class=\"thumbnail\" style=\"background-image: url(").reference(ctx.getPath(false, ["thumbnail","url"]),ctx,"h").write(");\"><h3>").reference(ctx.get(["title"], false),ctx,"h").write("</h3><span class=\"glyphicon glyphicon-play-circle\"></span></div></a><small class=\"center-block byline clearfix\"><a class=\"pull-right creator\" target=\"_blank\" href=\"").reference(ctx.getPath(false, ["creator","_webUrl"]),ctx,"h").write("\"><img src=\"").reference(ctx.getPath(false, ["creator","avatar","url"]),ctx,"h").write("\" alt=\"").reference(ctx.getPath(false, ["creator","about"]),ctx,"h").write("\" title=\"").reference(ctx.getPath(false, ["creator","about"]),ctx,"h").write("\"/></a><p class=\"pull-right created\">Shot ").reference(ctx.get(["createdAtRelative"], false),ctx,"h").write(" ").exists(ctx.get(["venue"], false),ctx,{"block":body_2},null).write(" by</p><p>").reference(ctx.getPath(false, ["stats","views"]),ctx,"h").write(" views</p></small></li>");}function body_2(chk,ctx){return chk.write("at <a target=\"_blank\" href=\"").reference(ctx.getPath(false, ["venue","_webUrl"]),ctx,"h").write("\">").reference(ctx.getPath(false, ["venue","name"]),ctx,"h").write("</a>");}return body_0;})();