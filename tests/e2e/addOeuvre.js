describe('Ajout et notation dune oeuvre', function() {

    beforeEach(function() {
        browser.get('http://localhost:4200/parcourir');
    });

    it('ajout oeuvre', function() {

        browser.waitForAngular();

        var bookParcourir = element(by.id('bookParcourir'));
        bookParcourir.click();

        var addBook = element(by.id('addBook'));
        addBook.click();

        var title = element(by.id('title'));
        var author = element(by.id('author'));
        var year = element(by.id('year'));
        var save = element(by.id('save'));

        title.sendKeys("test");
        author.sendKeys("test");
        year.sendKeys("2017");
        save.click();

        var addCollection = element(by.id('addCollection'));
        var addEnvie = element(by.id('addEnvie'));

        addCollection.click();
        addEnvie.click();

    });

    it('noté une oeuvre', function() {

        var macollection = element(by.id('macollection'));
        macollection.click();

        var bookParcourir = element(by.id('bookParcourir'));
        bookParcourir.click();

        var addnote = element(by.id('addnote'));
        addnote.click();

        var avis = element(by.id('avis'));
        var avisBtn = element(by.id('avisBtn'));
        var note = element(by.id('note'));
        var noteBtn = element(by.id('noteBtn'));

        avis.sendKeys('test');
        avisBtn.click();
        note.sendKeys('20');
        noteBtn.click();

    });
});
