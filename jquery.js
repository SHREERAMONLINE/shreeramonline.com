

    console.log('yellllooo ');

    $(document).ready(function () {
      $('p').click(function () {
        console.log("hjhhjkjnhjk")
        $(this).hide();//it hide current value
        //$("p").hide();//this hide toale value
      });


      $('marquee').click(function () {
        console.log("hjhhjkjnhjk")
        $("marquee").hide();
      });

      $('.div1').click(function () {
        console.log("hjhhjkjnhjk")
        i=0;
        $(".div1").hide();
        i=1;
         for(int p=0;p<=10;p++)
         {
          if(i==1)
          {
            $(".div1").hide();
          }
          else
          {
            $(".div2").hide();
          }
         }
         
       
        
        
      
      });

      
       
    })

  