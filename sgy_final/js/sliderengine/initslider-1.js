jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingslider-1").amazingslider({
        jsfolder:jsFolder,
        width:570,
        height:270,
        loadimageondemand:false,
        isresponsive:true,
        autoplayvideo:false,
        pauseonmouseover:false,
        randomplay:false,
        slideinterval:5000,
        transitiononfirstslide:false,
        loop:0,
        autoplay:true,
        navplayvideoimage:"play-32-32-0.png",
        navpreviewheight:60,
        timerheight:2,
        skin:"Header",
        addgooglefonts:true,
        navshowplaypause:true,
        navshowplayvideo:false,
        navbuttonradius:0,
        navpreviewposition:"top",
        navpreviewarrowheight:8,
        showshadow:false,
        navfeaturedarrowimagewidth:16,
        navpreviewwidth:120,
        googlefonts:"Inder",
        textpositionmarginright:24,
        navcolor:"#999999",
        arrowwidth:32,
        navmargin:16,
        texteffecteasing:"easeOutCubic",
        texteffect:"fade,slide",
        navspacing:8,
        playvideoimage:"playvideo-64-64-0.png",
        bordercolor:"#ffffff",
        navwidth:24,
        navheight:24,
        timeropacity:0.6,
        descriptioncss:"display:block; position:relative; margin-top:4px; font:14px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#fff;",
        navpreviewbordercolor:"#ffffff",
        arrowstyle:"mouseover",
        textpositionmargintop:24,
        navswitchonmouseover:false,
        navarrowimage:"navarrows-28-28-0.png",
        arrowimage:"arrows-32-32-3.png",
        textstyle:"none",
        playvideoimageheight:64,
        navfonthighlightcolor:"#666666",
        showbackgroundimage:false,
        navpreviewborder:4,
        shadowcolor:"#aaaaaa",
        navbuttonshowbgimage:true,
        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",
        textbgcss:"display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#333333; opacity:0.6; filter:alpha(opacity=60);",
        navpreviewarrowwidth:16,
        playvideoimagewidth:64,
        bottomshadowimagewidth:110,
        showtimer:false,
        navshowpreview:false,
        navradius:0,
        navfeaturedarrowimage:"featuredarrow-16-8-0.png",
        navfeaturedarrowimageheight:8,
        navstyle:"none",
        textpositionmarginleft:24,
        navplaypauseimage:"navplaypause-28-28-0.png",
        backgroundimagetop:-10,
        timercolor:"#ffffff",
        navfontsize:12,
        navhighlightcolor:"#333333",
        navimage:"bullet-24-24-0.png",
        navbuttoncolor:"#999999",
        navshowarrow:true,
        navshowfeaturedarrow:false,
        titlecss:"display:block; position:relative; font: 16px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#fff;",
        navshowbuttons:false,
        arrowhideonmouseleave:1000,
        navopacity:0.8,
        backgroundimagewidth:120,
        textautohide:true,
        arrowheight:32,
        arrowmargin:0,
        texteffectduration:1000,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        border:0,
        timerposition:"bottom",
        navfontcolor:"#333333",
        bottomshadowimagetop:95,
        borderradius:0,
        navbuttonhighlightcolor:"#333333",
        textpositionstatic:"bottom",
        textcss:"display:block; padding:12px; text-align:left;",
        navbordercolor:"#ffffff",
        navpreviewarrowimage:"previewarrow-16-8-0.png",
        showbottomshadow:false,
        backgroundimage:"",
        navposition:"bottom",
        navborder:4,
        textpositiondynamic:"bottomleft",
        shadowsize:5,
        textpositionmarginbottom:24,
        fade: {
            duration:1000,
            easing:"easeOutCubic",
            checked:true
        },
        transition:"fade"
    });
});