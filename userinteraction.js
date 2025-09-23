console.log("This is the script text")
                function helloworld()
                {
                    console.log("Hello World")
                }
                function confirmDialog()
                {
                    let decision = window.confirm("is it ok?")
                    console.log(decision)
                }
                function confirmDialog1()//confirmDialog1()
                {
                    let remove = confirm("remove data")
                    let message = remove?"Deleting Data":"Cancelled1"
                    console.log(message)
                }
                function promptDialogeExample()
                {
                    let name = window.prompt("what is your name ","George")
                    name = name ? name: "anonymouse"
                    let age = prompt("Hello" + name  + "How old are you?")
                    alert(name+ "is " + age + "old")
                }