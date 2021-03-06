define({
    "host": "Host",
    "domain": "Domain",
    "account": "Account",
    "username": "Benutzername",
    "password": "Passwort",
    "signIn": "Anmelden",
    "enterTheDomain": "Bitte den Host eingeben.",
    "enterTheUsername": "Bitte geben Sie den Benutzernamen ein.",
    "enterThePassword": "Bitte geben Sie das Passwort ein.",
    "incorrectCredentials": "Der Benutzername oder das Passwort sind nicht korrekt.",
    "noConnectionToServer": "Die Verbindung zum Server kann nicht hergestellt werden.",
    "hasAttachments": "hat Anhänge",
	"home": "Home",
    "singOut": "Abmelden",
    "back": "Zurück",
    "viewInPlatform": "Auf der Plattform anzeigen",
    "signingOut": "Abmelden",
    "next": "Weiter",
    "previous": "Zurück",
    "noMessages": "Keine Nachrichten",
	"noDescription": "Keine Beschreibung",
	"noNotebook": "Keine Notizbücher",
    "update": "Update",
	"update_course": "Aktualisieren der LV-Liste",
    "messageDoesNotExists": "Die Nachricht liegt nicht vor",
    "youHaveNotLogged": "Sie haben sich nicht angemeldet",
    "unspecifiedMessage": "Unbestimmte Nachricht",
	"unspecifiedCourse": "Unbestimmte Lehrveranstaltung",
    "notOnLine": "Sie sind offline",
	"inboxMessages": "Nachrichteneingang",
    "noNewMessages": "Keine neuen Nachrichten",
	"messages": "Nachrichten",
	"noCourses": "Keine Lehrveranstaltungen",
	"courses" : "Meine Kurse",
	"goToCourse": "Gehe zu Lehrveranstaltung",
	"profile" : "Mein Profil",
	"catalogCourse" : "Kursverzeichnis",
	"complete_name" : "Vollständiger Name",
	"official_code" : "Matrikelnummer",
	"phone": "Telefon",
	"extra_info": "Zusatzinformation",
	"description": "Beschreibung",
	"documents": "Unterlagen",
	"announcement": "Ankündigungen",
	"agenda": "Kalender",
	"forum": "Forum",
	"notebook": "Notizbuch",
	"ranking": "Bewertungen",
	"documents": "Unterlagen",
	"noDocuments": "Keine Unterlagen",
	"announcements": "Ankündigungen",
	"update_announcement": "Ankündigungen aktualisieren",
	"noAnnouncements": "Keine Ankündigungen",
	"unspecifiedAnnouncement": "Unbestimmte Ankündigung",
	"agenda": "Kalender",
	"noEvents": "Keine Einträge",
	"allDay": "Ganzer Tag",
	"noForums": "Keine Foren",
	"noThreads": "Keine threads",
	"noPosts": "Keine posts",
	"problemSave": "Problemlösung",
	"enterTitle": "Titel eingeben",
	"enterText": "Text eingeben",
	"title": "Titel",
	"text": "Text",
	"notice": "Benachrichtigung per E-Mail",
	"createThread": "Thread anlegen",
	"ResponsePost": "Auf post antworten",
	"Response": "Antworten",
	"Notify": "Benachrichtigung per E-Mail, wenn jemand antwortet",
	"position": "Position",
	"studentName": "Studierenden-Name",
	"score": "Score",
	"details": "Details",
	"noRanking": "Keine Bewertungsangaben",
	"detailsRanking": "Bewertungsdetails",
	"creationDate": "Erstellungsdatum",
	"updateDate": "Letztes update",
	"sendto": "Senden an",
	"wrote": "schrieb",
	"ResponseMessage": "Antwort-Nachricht",
	"searchUser": "mindestens 3 Buchstaben",
	"subject": "Betreff",
	"message": "Nachricht",
	"enterSender": "Unbestimmter Absender",
	"addQuote": "Zitat hinzufügen",
	"Send": "Gesendet",
	"fromDateUntilDate": function (from, until) {
	    if (from && !until) {
            return "Desde " + from;
        }

        if (!from && until) {
            return "Hasta " + until;
        }
        
        if (!from && !until) {
            return "";
        }

        return "From " + from + " until " + until;
    },
	"FromDate": "Von",
	"toDate": "An",
	"noInfo": "Keine Angabe",
	"new_notebook": "Neues Notizbuch",
	"createNotebook": "Notizbuch anlegen",
	"learnpath": "Lernpfad",
	"noLearnpath": "Kein Lernpfand",
	"isTeacherCourse": "Sie sind Lehrveranstaltungsleiter",
	"isStudentCourse": "Bereits für die Lehrveranstaltung eingetragen",
	"isForbiddenCourse": "Einschreibung nicht zulässig",
	"information": "Information",
	"successSubscribe": "Sie haben sich erfolgreich für die Lehrveranstaltung eingetragen",
	"passwordCourse": "Freischalt-Code",
	"registrationCourse": "Anmeldung zur Lehrveranstaltung",
	"Cancel": "Abbrechen",
	"Confirm": "Ok",
	"links": "Links",
	"categoryCourses": "Lehrveranstaltungskategorien",
	"title_download": "Bitte warten",
    "message_download": "Download vom Server...",
    "successDownload": "Download erfolgreich",
    "NoticeTitleBar": "Hinweis",
    "title_upload": "Bitte warten",
    "message_upload": "Upload auf den Server...",
    "successUpload": "Upload erfolgreich",
    "NoDownloadAttachment": "Download der Anlage nicht möglich",
    "NoUploadAttachment": "Upload der Anlage nicht möglich",
    "NoPermission": "Keine Speichererlaubnis",
	"works": "Hausarbeiten",
	"SendWork": "Hausarbeit einreichen",
	"HandOutDateLimit": "Deadline",
	"Comment": "Kommentar",
	"LastUpload": "Letzter upload",
	"Qualification": "Bewertung",
	"Date": "Datum",
	"State": "Status",
	"UploadWork": "Hausarbeit einreichen",
	"enterDescription": "Beschreibung eingeben",
	"enterFile": "Datei eingeben",
	"enterDescriptionOrFile": "Beschreibung oder Datei eingeben",
	"Attach": "Datei anhängen",
	"LoadingScreen": "Ladevorgang...",
	"noWorks": "Keine Hausarbeiten",
	"Feedback": "Feedback",
	"Save": "Speichern",
	"View": "Anzeigen",
	"Correction": "Korrektur",
	"Content": "Inhalt",
	"DateSend": "Versanddatum",
	"AmountSubmitted": "Eingereichte Anzahl",
	"HandOutDateLimit": "Deadline",
	"FullUserName": "Vollständiger Name",
	"Actions": "Aktionen",
	"DeleteCorrections": "Alle Korrekturen löschen",
	"CreateAssignment": "Aufgabe erstellen",
	"AssignmentName": "Name der Aufgabe",
	"AdvancedParameters": "Erweiterte Einstellungen",
	"QualificationNumeric": "Maximale Bewertung",
	"MakeQualifiable": "Zum Notenbuch hinzufügen",
	"SelectGradebook": "Bewertung auswählen",
	"WeightInTheGradebook": "Gewichtung innerhalb der Bewertung",
	"EnableExpiryDate": "Einreichungsfrist aktivieren (für Studierende sichtbar)",
	"ExpiresAt": "Einreichungsfrist",
	"EnableEndDate": "Einreichungsfrist",
	"EndsAt": "Ablauf",
	"AddToCalendar": "Zum Kalender hinzufügen",
	"DocumentType": "Dokument-Typ",
    "CreateDirectory": "Bestätigen",
    "FieldRequired": "Erforderliches Feld",
    "AllowFileOrText": "Dateien oder Text erlauben",
    "AllowOnlyText": "Nut Text erlauben",
    "AllowOnlyFiles": "Nur Dateien erlauben",
    "enterTitleAssignment": "Aufgaben-Titel eingeben",
    "Student": "Student/in",
    "ResumeWorks": "Hausarbeit fortsetzen",
    "Edit": "Edit",
    "ModifyDirectory": "Bestätigen",
    "AddUsers": "Benutzer hinzufügen",
    "UsersAdded": "Benutzer hinzugefügt",
    "UsersToAdd": "Hinzuzufügende Benutzer",
    "Add": "Hinzufügen",
    "Delete": "Löschen",
    "NoUsersToAdd": "Keine hinzuzufügenden Benutzer",
    "FirstName": "Vorname",
    "LastName": "Familienname",
    "Status": "Status",
    "Email": "E-mail",
    "Qualification": "Qualifikation",
    "AddAnAttachment": "Anlage hinzufügen",
    "Modify": "Ändern",
    "SendMailToStudent": "Mail an Student/in schicken",
    "SendMailToHR": "Mail an Plattform-Management schicken",
    "ConfirmYourChoice": "Auswahl bestätigen",
    "Download": "Download",
    "ExpiryDateAlreadyPassed": "Einreichungsfrist abgelaufen",
    "EndDateAlreadyPassed": "Einreichungsdatum abgelaufen",
    "Register": "Anmelden",
    "ByClickingRegisterYouAgreeTermsAndConditions": "Durch Klicken auf 'Anmelden' akzeptieren Sie unsere allgemeinen Bedingungen, insbesondere zum Datenschutz.",
    "RegisterUser": "Anmelden",
    "RegisterNewUser": "Neue Registrierung",
    "BackToApp": "Zurück zur App",
    "TermsAndConditions": "AGB/Impressum/Datenschutz",
    "invalidAccount": "Account nicht validiert",
    "Exercises": "Tests",
    "ToolCourseDescription": "Beschreibung",
    "ToolDocument": "Unterlagen",
    "ToolLearnpath": "Lernpfad",
    "ToolLink": "Links",
    "ToolQuiz": "Tests",
    "ToolAnnouncement": "Ankündigungen",
    "ToolGradebook": "Notenbuch",
    "ToolGlossary": "Glossar",
    "ToolAttendance": "Anwesenheiten",
    "ToolCalendarEvent": "Kalender",
    "ToolForum": "Forum",
    "ToolDropbox": "Dropbox",
    "ToolUser": "Benutzer",
    "ToolGroup": "Gruppen",
    "ToolChat": "Chat",
    "ToolStudentPublication": "Aufgaben",
    "ToolSurvey": "Umfragen",
    "ToolWiki": "Wiki",
    "ToolNotebook": "Notizbuch",
    "ToolBlogManagement": "Projekte",
    "ToolTracking": "Reporting",
    "LostPassword": "Passwort vergessen",
    "Type": "Typ",
    "Name": "Beschreibung",
    "NoMatches": "Keine berechtigten Kontakte",
    "ForumTopics": "Themen",
    "PublishedBy": "Veröffentlicht durch",
    "LastMessage": "Letzte Antwort",
    "NoForumInCategory": "In dieser Kategorie gibt es keine Foren",
    "Topics": "Themen",
    "Answers": "Antworten",
    "Views": "Ansichten",
    "Posts": "Nachrichten",
    "ReplyToMessage": "Antworten",
    "QuoteMessage": "Zitieren",
    "Quote": "Zitieren",
    "SelectFile": "Anlage auswählen",
    "NotifyMeByEmail": "Per E-Mail über Antworten benachrichtigen"
});
