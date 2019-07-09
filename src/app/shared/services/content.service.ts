import { Injectable } from '@angular/core';
import {Content} from "../models/content.model";
import {Link} from "../models/link.model";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Map<string, Content>

  constructor() {
    this.pages = new Map();
    this.pages.set('home', new Content('Figgé Consulting', 'c/o Paw Figgé Kjeldgaard', 'Paw Figgé Kjeldgaard is a freelance developer and architect specializing in Object Oriented Software Development and Internet applications. He has over 20 years experience working with both small and very large projects involving the development of web based solutions and applications. He also has experience with the DevOps role maintaining a PKI solution in the banking industry, giving him a unique insight into building maintainable solutions.\n\nAs a Java developer he has become comfortable with many of the most relevant and cutting-edge tools and technologies involved in developing J2EE applications, including Spring, Hibernate, JPA, Tomcat, JBoss, SQL, plus strong skills in open source and Unix (Linux). Most of all he excels in applying his problem solving skills to develop good simple solutions, along with being an experienced technical lead.\n\nPaw works best in project teams, but can also easily work independently, where agile methods are mastered so that development can be quickly adapted to the customer\'s wishes and needs.\n\nTypically works in roles such as: Developer, Architect and Coach.\n\nSpecialties: Red Hat OpenShift Container Platform, Java Development, Software Architecture, Spring Boot, Apache Camel.', 'assets/IMG_0557.jpg', [new Link('https://www.linkedin.com/in/pawfk', 'https://www.linkedin.com/in/pawfk', 'LinkedIn')]))
    this.pages.set('contact', new Content('Contact', 'Figgé Consulting, CVR: 40500529', 'c/o Paw Figgé Kjeldgaard\nLynghøjvej 1, Lime\n8544 Mørke\nDanmark', 'assets/IMG_0557.jpg', [new Link('paw@figge.dk', 'mailto:paw@figge.dk', 'email')]))
  }
}
