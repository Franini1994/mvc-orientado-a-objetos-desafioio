import * as jsonfile from "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  
  load(){
    const dataJson = jsonfile.readFileSync ( __dirname +  "/contacts.json");
      this.data = dataJson;
  }

  getAll(){
    return this.data
  }

  addOne(contact:Contact) {
    return this.data.push(contact)
  }

  save(){
    jsonfile.writeFileSync( __dirname + "/contacts.json", this.data);    
  }

  getOneById(id:number){
    const resultado = this.data.find(x => x.id == id)
    return resultado
  }
}
export { ContactsCollection };
