const http  = require('http')
const PORT =  8080
const templateHtml  = `<!DOCTYPE html>
<html>
<body>
<div id="demo">
<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="load()">Change Content</button>
</div>

<script type="text/javascript">
function load(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if (this.readyState === 4 && this.status === 200) {
document.getElementById("demo").innerHTML = this.responseText;
}
};
xhttp.open("GET", "hello-world", true);
xhttp.send();
}
</script>

</body>
</html>`

const reqHandler = (req, res) => {
    console.log('new request')
        if (req.url === '/'){
            res.end(templateHtml)
        } else if (req.url === '/hello-world'){
            res.end('Hello Horld!')
        } else{
            res.end('Done')
        }
}

const server = http.createServer(reqHandler)

server.listen(PORT, err => {
    if(err) console.log('Fail to start server!!!ERROR!!!')
    else{
        console.log(`Server started at ${PORT}`)
    }
})