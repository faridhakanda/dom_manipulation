function bigSmall(){
    // gsap.to(".text1", 
    //     {
    //         scaleX: 1,
    //         scaleY: 1.2,
    //         duration: 1,
    //         repeat: -1,
    //         yoyo: true,
    //     },
    //     // {
    //     //     scaleX: 0.7,
    //     //     scaleY: 0.8,
    //     //     duration: 1.3
    //     // }
    // );
    gsap.to('.text1',{ scaleX:1.1,scaleY:1.1,transform: "translateY(10px)", duration:.7,repeat:-1,yoyo:true});
}
setInterval(bigSmall, 1500);