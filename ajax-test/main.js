var xhr = new XMLHttpRequest(); /*
                                The very first thing that we do on line 1 is to create a new instance of the XMLHttpRequest object.
                                XML stands for Extensible Markup Language, which is similar to HTML in the way it structures its 
                                data, and it's a precursor to JSON.
                                */
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); /*The GET method is used when we're retrieving data from the server.
                                                        This is a standard one that a browser users when retrieving a web page.
                                                        The second argument is the URL that we want to retrieve. Making a request
                                                        */
xhr.send();                                             //And then we do xhr.send() to send the request.



xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
     }
};       
        
                                                        /*
                                                        The main chunk of what's going on in this piece of code is in this 
                                                        onreadystatechange() function.
                                                        The xhr object maintains an internal state as it's completing various 
                                                        parts of our request operation.
                                                        And "readyState = 4" means that the operation has been completed.
                                                        */


 