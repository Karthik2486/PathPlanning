var number_of_path_points=0;
var points=[];
var head,tail;

/*PATH SEGMENT */
/*Path Segment represents the paths that are followed by each robot, such that it has a reference to the starting and endint*/
class Path_Segment{

    Path_Segment(starting_point,ending_point){

        this.ID = null;
        this.max_permissible_speed = null;
        this.length_of_path=null;
        this.state_of_path = null;
        this.type_of_segment=null;




    }
}

function add_path_point_front(data){

    let new_point = new Path_Points(data)

    new_point.next =head;
    new_point.prev = null;

    if(head!=null)
        head.prev = new_point;

    head = new_point;
}

function add_path_point_back(data){

    let new_point = new Path_Points(data)

    new_point.next =new_point;
    new_point.prev = tail;
    tail = new_point;
}

class Path_Points{
    Path_Points(x,y,theta){

        this.x_value = x;
        this.y_value = y;
        this.orientation = theta;

        this.next = null;
        this.prev = null;

    }
}


function mouseClicked(){
    
    console.log("mouse clicked")
    number_of_path_points++;
    points.push(add_path_point(mouseX,mouseY,null));

}

console.log(points)