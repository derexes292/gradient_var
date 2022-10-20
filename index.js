color_a = 255
color_b = 0
color_c = 0
speed_booster = 3  //choose from (1x, 3x, 5x)
time_interval = 10
direction = 'top'




console.log("original : ", color_a, color_b, color_c)
function change_col(){
    
    if(color_a == 255 && color_b >= 0 && color_c == 0){
        color_b = color_b + speed_booster
    }

    if(color_a <= 255 && color_b == 255 && color_c == 0){
        color_a = color_a - speed_booster , color_b = 255
    }

    if(color_a == 0 && color_b == 255 && color_c >= 0){
        color_c = color_c + speed_booster , color_a = 0
    }

    if(color_a == 0 && color_b <= 255 && color_c == 255){
        color_b = color_b - speed_booster , color_c = 255
    }

    if(color_a >= 0 && color_b == 0 && color_c == 255){
        color_a = color_a + speed_booster , color_b = 0
    }

    if(color_a == 255 && color_b == 0 && color_c <= 255){
        color_c = color_c - speed_booster , color_a = 255
    }

    new_color = "linear-gradient(to " + direction + "," + "rgb(" + color_c + "," + color_a + "," + color_b + ")" + "," + "rgb(" + color_b + "," + color_c + "," + color_a + "))"

    document.getElementById("container").style.background = new_color;
}



setInterval(change_col, time_interval)
