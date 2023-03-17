    let i = 0;  
    // topun X oxu
    let j = 0;
    // topun Y oxu
    let z = 1; 
    //  topun scale olcusu
    let rotate_degree = 0;
    // topun bucaqi
    let stepX = 50;
    // topun X oxu uzre hereket px-li
    let stepY = 50;
    // topun Y oxu uzre hereket px-li
    let stepZ = 0.5;
    // topun scalesinin boyume radiusu
    let step_deg = 360/7;
    //  topun firlanma derecesi
    let table_width = 800;
    //  masanin uzunluqu
    let table_height = 400;
    // masanin hundurluyu
    let ball_width = 100;
    // bolun diametri
   
    document.getElementById("gameScreen").style.width = table_width
    document.getElementById("gameScreen").style.height = table_height;

    class buttons {
      constructor (button){
        this.button = button 
      }
      rotate (oriantation) {
       
        document.getElementById("top").style.transition =
        "transform 0.5s linear";
          if(oriantation == "right") {
            rotate_degree = rotate_degree + step_deg;
          }else{
            rotate_degree = rotate_degree - step_deg;
          }
        document.getElementById("top").style.transform =
        "translate(" + i + "px," + j + "px) rotate(" +
        (((i/stepX)*step_deg) + rotate_degree) +
        "deg) scale(" + z + ")";
      }
      scale(weight){
        document.getElementById("top").style.transition = "transform 0.5s linear";
        
        if(weight == "out"){
        
          if ( ball_width < table_height  || z <= -(table_width/ 2 - ball_width / 2 - stepZ) ) {
            z = z + stepZ;
          }
        }
        else{
          if ( ball_width > 0){
            z = z - stepZ;
          }
        }
          ball_width = z * 100;

        document.getElementById("top").style.transform =
          "translate(" + i + "px," + j + "px) rotate(" +
          (((i/stepX)*step_deg) + rotate_degree) +
          "deg) scale(" + z +")";

        
      }
      horizontal ( width ){
        document.getElementById("top").style.transition = "transform 0.5s linear";
        if(width == "right"){
          if (i <= table_width/ 2 - ball_width / 2 - stepX) {
            i = i + stepX;
          }
        }
        else{
          if (i >= -(table_width/ 2 - ball_width / 2 - stepX)) {
            i = i - stepX;
          }
        }  
          document.getElementById("top").style.transform =
            "translate(" +
            i +
            "px," +
            j +
            "px) rotate(" +
            (((i/stepX)*step_deg) + rotate_degree) +
            "deg) scale(" + z + ")";
        
      }
      vertical (height){
        document.getElementById("top").style.transition = "transform 0.5s linear";
        if(height =="down"){
          if (j <= table_height/2 - ball_width / 2 - stepY) {
            j = j + stepY;
          }
        }
        else{
          if (j >= -(table_height/2 - ball_width / 2 - stepY)) {
           j = j - stepY;
          }
        }
        document.getElementById("top").style.transform =
            "translate(" + i + "px," + j + "px) rotate(" +
            (((i/stepX)*step_deg) + rotate_degree) +
            "deg) scale(" + z + ")";
      }
      }

    

    function reset() {
      document.getElementById("top").style.transition =
        "transform 2s linear ";

        document.getElementById("top").style.transform =
        "translate(0px,0px) rotate(0deg) scale(1)";
        
        i=0;
        j=0;
        z=1;
        rotate_degree=0;
        ball_width = 100;
    }

    let ref1 = new buttons("button")
    