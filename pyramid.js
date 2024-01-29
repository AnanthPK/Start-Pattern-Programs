var n = parseInt(prompt("Enter the row"));
for(i=1;i<=n;i++){
    for(j=i;j<=n;j++){
        document.write("- ")
    }
    for(j=1;j<=i;j++){
        document.write("* ")
    }
    for(j=1;j<i;j++){
        document.write("* ")
    }
    document.write("<br>")
}