import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  pages: Object = {
    'home': {
      title: 'Figgé Consulting',
      subtitle: 'c/o Paw Figgé Kjeldgaard',
      content: 'Paw Figgé Kjeldgaard is a freelance developer and architect specializing in Object Oriented Software Development and Internet applications. He has over 20 years experience working with both small and very large projects involving the development of web based solutions and applications. He also has experience with the DevOps role maintaining a PKI solution in the banking industry, giving him a unique insight into building maintainable solutions.\n\nAs a Java developer he has become comfortable with many of the most relevant and cutting-edge tools and technologies involved in developing J2EE applications, including Spring, Hibernate, JPA, Tomcat, JBoss, SQL, plus strong skills in open source and Unix (Linux). Most of all he excels in applying his problem solving skills to develop good simple solutions, along with being an experienced technical lead.\n\nPaw works best in project teams, but can also easily work independently, where agile methods are mastered so that development can be quickly adapted to the customer\'s wishes and needs.\n\nTypically works in roles such as: Developer, Architect and Coach.\n\nSpecialties: Red Hat OpenShift Container Platform, Java Development, Software Architecture, Spring Boot, Apache Camel.',
      image: 'assets/IMG_0557.jpg'
    },
    'cv': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/IMG_0557.jpg'},
    'contact': {
      title: 'Contact',
      subtitle: 'Figgé Consulting',
      content: 'CVR: 40500529\n\nc/o Paw Figgé Kjeldgaard\nLynghøjvej 1, Lime\n8544 Mørke\nDanmark\n\nemail: paw@figge.dk', image: 'assets/IMG_0557.jpg'}
  };
}
