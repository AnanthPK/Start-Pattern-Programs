var n = parseInt(prompt("Enter The Number of rows"))
for (i=1;i<=n;i++){
    for(j=1;j<=i;j++){
        document.write("- ");
    }
    for(j=i;j<=n;j++){
        document.write("* ")
    }
    for(j=i;j<n;j++){
        document.write("* ")
    }
    document.write("<br>")
}