
const fs = require('fs')


// fs.writeFileSync('files/data2.text' , 'My new file created')         // file create

// fs.unlinkSync('files/data2.text' )                                   // file delete

// fs.appendFileSync('files/data.text' ,' this is my new file')         // append file

// const data = fs.readFileSync('files/data.text' , 'utf-8')             // read file
// console.log(data);

// const text = (process.argv[2]);                                     // termenal se data lene ke liye
// fs.appendFileSync('files/data.text' , `${text}`)


// ..................................... CRUD OPERATION  WITH TERMINAL..................................

const operation = process.argv[2]
const fileName = process.argv[3]
const text = process.argv[4]

if(operation === 'write'){
    fs.writeFileSync(`files/${fileName}.text` , text )
}
else if(operation === 'read'){
    const data = fs.readFileSync(`files/${fileName}`, 'utf-8')
    console.log(data);     
}
else if(operation === 'update'){
    fs.appendFileSync(`files/${fileName}` , text)
}
else if(operation === 'delete'){
    fs.unlinkSync(`files/${fileName}`)
}


