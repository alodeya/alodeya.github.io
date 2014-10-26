var default_dict = { 
  "title" : "Alodeyá Cy",
  "activities" : "Circus, dance, poetry",
  "company_link" : "Company",
  "shows_link" : "Shows",
  "multimedia_link" : "Multimedia",
  "clipping_link" : "Clipping",
  "contact_link" : "Contact"
}

var en_dict = default_dict;

var es_dict={
  "title" : "Cia. Alodeyá",
  "activities" : "Circo, danza, poesía",
  "company_link" : "Compañía",
  "shows_link" : "Espectáculos",
  "multimedia_link" : "Multimedia",
  "clipping_link" : "Clipping",
  "contact_link" : "Contacto"
}

language='es-ES';

switch(language){
  case 'en-US': var dict = en_US_dict; break;
  case 'es-ES': var dict = es_dict;    break;
  default:      var dict = default_dict;
}

$.i18n.setDictionary(dict);
