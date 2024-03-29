Willkommen zum invertierten Unterricht des Moduls
# Entwicklung interaktiver Anwendungen II (EIA2)
## Rückblick
Im Modul "Entwicklung interaktiver Anwendungen I" (EIA1) wurdest Du zunächst an HTML und CSS heran geführt, um damit eine Grundlage für die weiteren Schritte zu schaffen. Denn als technische Plattform dienen in dieser Modulreihe Internetbrowser, da sie auf allen gängigen Geräten zur Verfügung stehen. 
Darüber hinaus hast Du tiefergehende Kenntnisse im Umgang mit einer imperativen Programmiersprache erlangt und Aufgaben mit Hilfe einfacher, prozeduraler Algorithmen gelöst. Es wurde TypeScript verwendet, da - im Vergleich zu Javascript - einerseits die verwendeten Datenstrukturen sichtbar werden und andererseits automatische und umfassende Hilfestellung bei der Implementation gewährleistet wird. Auch erste Interaktionen konntest Du mit Hilfe der Ereignissteuerung umsetzen. Durch die Manipulation des "Document Object Model" (DOM) konntest Du die Reaktionen des Systems für Nutzer planvoll sichtbar machen. Hierzu hast Du ein gutes Verständnis der DOM-Klassenhierarchie und des Laufzeitverhaltens erlangt.
## Einblick
Es ist erforderlich, dass sämtliche Inhalte des Moduls EIA1 verinnerlicht sind und angewendet werden können, insbesondere
- Die Arbeit mit Github und Visual Studio Code
- Die Informationsrepräsentation im binären und hexadezimalen System
- Die grundlegenden in Javascript und TypeScript verwendeten Datentypen
- Einfache und assoziative Arrays
- Die Sprachkonstrukte imperativer
Programmiersprachen: Anweisungen, Operatoren, Kontrollstrukturen, Funktionen
- Generierung dynamischer Webseiten
- DOM-Klassen- und Laufzeit-Hierarchie
- Problemlösungsstrategie
- Die Arbeit mit der Browserkonsole und Debugging im Browser

## Ausblick
In EIA2 lernst Du, auch komplizierte Aufgabenstellungen anzugehen, wobei die Konzeption im Vordergrund steht. Hierzu wirst Du Diagrammformen der "Unified Modelling Language" (UML) verwenden, um mit deren Hilfe Probleme zu durchdringen und Lösungen zu konzipieren. Ihre nachfolgenden Implementationen mit TypeScript stellen lediglich Nachweise der erfolgreichen Konzeption dar.  
Zunächst werden mit diesen Mittel Aufgabenstellungen bearbeitet, die sich direkt an die DOM-Manipulationen von EIA1 anschließen. Danach werden zusätzlich die interaktiven Formularelemente des HTML-Standards eingesetzt und ausgewertet. Nutzer können damit Informationen an andere Rechner zur Auswertung oder Speicherung senden, daher beschäftigen Sie sich mit den entsprechenden Strukturen bezüglich Server und Datenbank. Danach befasst sich der Kurs mit dem objektorientierten Paradigma der Software-Entwicklung, das es zulässt, auch für sehr komplexe Aufgabenstellungen intuitiv zu konzipieren. Damit einher gehen erweiterte Anwendungen der UML-Diagramme und Implementationsdetails. Die grafische Darstellung erfolgt dann über das HTMLCanvasElement, was eine freie Gestaltung zulässt, und die Nutzer-Interaktionen können weit über die für Webseiten üblichen hinausgehen.

## Gliederung
### [L00_Preface](L00_Preface)
- Medienkonzeption und Digitale Medien
- Wichtige Dokumente
- Veranstaltungskonzept

### [L01_Recap&Foundation](L01_Recap&Foundation)
- Einleitung
- Rückblick
- Einblick
- Variablen
- Datentypen
- Explizite Typisierung
- Komplexe Datentypen
- Fehlertypen
- Trace Table
- Debugger
- Aktivitätsdiagramm

### [L02_Events](L02_Events)
- Rückblick DOM
- Ereignisse
- Event-Handler
- Event-Phasen
- Anwendungsfalldiagramm (Use-Case-Diagram)
- Skizze: User Interface 
- Iterative Arbeitsweise
  
### [L03_FormElements](L03_FormElements)
- Texteingabe
- Selektionen
- Ausgabeelemente
- Konzeption und Implementation einer formulargesteuerten Anwendung  
- FormData
  
### [L04_DataStructures](L04_DataStructures)
- Separation Of Concerns
- Trennung von Struktur und Inhalt
- Algorithmen und Datenstrukturen
- Datenstruktur für die Cocktailbar
- Generierung des Formulars
- Refactoring
- JSON (Javascript Object Notation)

### [L05_Client](L05_Client)
- Synchrone und asynchrone Kommunikation
- Forms
- XmlHttpRequest-Events
- Fetch & Promises
- Async/Await
- Uniform Resource Locator (URL)
- Lokaler Fileserver
- JSON-Objekt

### [L06_Server](L06_Server)
- ServerSide
- Node
  - install @types/node with npm
  - argv
  - env
- Heroku
  - start new app in Heroku
  - connect to repository and branch
  - deploy app and view log
  - add and edit package.json
  - call app via http -> server missing
- Server- & URL-Class
  - add http-Server and create response
  - find parameters in browser analysis (if possible for GET)
  - show node URL scheme in documentation
- CORS
- localhost

### [L07_Database](L07_Database)
- NoSQL
- MongoDB
  - start mongod in terminal
  - see port and other messages
  - start shell in system console
  - type some commands
  - see response in terminal
- Mongo in Node
  -    install @types
- Database on MongoDB Atlas (former mLab)
- Database.ts - Module
- Callbacks
- Anonymous and nested functions

### [L08_Canvas](L08_Canvas)
- HTMLCanvasElement
- RenderingContext
- Immediate/Deferred Rendering
- Path-Metaphor
- Drawing Commands
- Relative Positioning
- Save/Restore
- Shortcuts fillRect and strokeRect
- Create functions for drawing repetitive images

### [L09_Classes](L09_Classes)
- Refactor interfaces to classes
- Class-Diagram
- Property/Attribute
- Method
- Constructor
- Instance/Object
- Garbage Collection
- Animation

### [L10_Inheritance](L10_Inheritance)
- Identify common properties and behaviours
- Superclass, Subclass
- Inheritance in Diagram
- Polymorphism
- Abstract classes & methods
- Animate different objects with common base

### [L11_Advanced](L11_Advanced)
- Scopes and Visibility
  - public
  - protected
  - private
- Static

### [L12_Addition](L12_Addition)
- Exceptions
- Enums
- Generics
- this-binding, Arrow-Function
- Drag&Drop
  - mark element as draggable
  - set dataTransfer-object on dragstart
  - event-information is saved and accessible on drop
  - allow drop on element, preventDefault on dragover
  - get dataTransfer-object on drop and process
