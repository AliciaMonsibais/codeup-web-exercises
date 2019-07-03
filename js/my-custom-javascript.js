 $(document).ready(
        // $('li').css('font-size', '20px');
// $('h1, p, li').css('background-color', '#5fc2c2');
// alert($('h1').html());
        function(){
            $('h1').click (
                function(e){
                    $(this).css('background-color', '#5fc2c2')
                }
            );
            $('p').dblclick(function (e){
                $('p').css('font-size', '18px')
                }
            );
            $('li').hover (
                function(e){
                    $(this).css('color', 'red')
                },
                function(e){
                    $(this).css('color', 'black');
                }
            )
        });
