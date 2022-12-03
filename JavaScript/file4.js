var array = "My name is Anthony Gonsalves";
        document.write(array);
        
        document.write("</br>" + "</br>");

       var newArray1 = array.split(" ");
       for(i=0 ; i<newArray1.length; i++){
            rev1 =newArray1[i].split("");
            final1 = rev1.reverse();
            
            for(j =0; j<final1.length ; j++){
                document.write(final1[j]);
            }
            document.write("  ");
            
        }
        document.write("</br>" + "</br>");

        var newArray2 = array.split(" ");
        newArray2.reverse();
    
        for(x=0 ; x<newArray2.length ; x++){
            document.write(newArray2[x]);
            document.write("  ");
        }
        document.write("</br>" + "</br>");
        
        
        for(i=0 ; i<5; i++){

            rev2 = newArray2[i].split("");
            final2 = rev2.reverse();
            
            for(j=0; j<final2.length ; j++ ){
                document.write(final2[j]);
            }
            document.write("  ");
        }