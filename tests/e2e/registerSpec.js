describe('inscription', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('tentative de register', function() {
    var registerButton = element(by.id('btnRegister'));
    registerButton.click();

    var username = element(by.id('usernameRegister'));
    var password = element(by.id('passwordRegister'));
    var saveButton = element(by.id('btnSaveRegister'));

    username.sendKeys('capsy');
    password.sendKeys('blabla');
    saveButton.click();
  });

  it('tentative de login',function(){
    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var loginButton = element(by.id('btnLogin'));

    username.sendKeys('capsy');
    password.sendKeys('blabla');
    loginButton.click();
  });

});
