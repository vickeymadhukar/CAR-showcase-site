var text=document.querySelector("h1"),
  char=document.querySelectorAll("span"),
  replaceChar=text.querySelectorAll('span:not([data-char="."])');

  var tl=gsap.timeline();

  tl.set(char,{
    yPercent:-130
  })
  tl.set(text,{
    autoAlpha:1
  });

  tl.to(char,{
    duration:1,
    yPercent:0,
    stagger:0.05,
    ease:"expo.inOut"
  })
  .to(replaceChar,{
    duration:1.5,
    yPercent:130,
    ease:"expo.inOut",
    repeat:-1,
    yoyo:true,
    stagger:0.1
  });

  
gsap.to("#page2 h1",{
  transform:"translateX(-500%)",
   scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 0%",
    end:"100% -100%",
    markers: true,
    scrub:2,
    pin:true
   }
});

var tv=gsap.timeline({
   scrollTrigger:{
   trigger:"#first",
   start:"50% 50%",
   end:"70% 50%",
   scrub:2,
   pin:true


}
});

tv.to("#one",{
  top:"-50%"
  
},'q')
tv.to("#three",{
  bottom:"-50%",
  opacity:"0"
},'q')
tv.to("#top-h",{
  bottom: "80%"
},'q')




