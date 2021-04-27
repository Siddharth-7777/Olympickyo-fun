

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    ctx.beginPath()
    ctx.strokeStyle = "purple"
    ctx.lineWidth = 2
    ctx.rect(150,100,525,300)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 5
    ctx.arc(250,210,70,0,2*Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = "orange"
    ctx.lineWidth = 5
    ctx.arc(330,280,70,0,2*Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 5
    ctx.arc(410,210,70,0,2*Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = "green"
    ctx.lineWidth = 5
    ctx.arc(490,280,70,0,2*Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.lineWidth = 5
    ctx.arc(570,210,70,0,2*Math.PI)
    ctx.stroke()

    

   