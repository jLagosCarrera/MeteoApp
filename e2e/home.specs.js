const baseUrl = 'http://localhost:9000/#!';

describe('meteoapp home', () => {
    beforeEach(() => {
        browser.get(`${baseUrl}/home`);
        const recentCitiesSample = [{
            "cityName": "vigo",
            "lat": "42.23282",
            "lng": "-8.72264"
        }, {
            "cityName": "tui",
            "lat": "42.04713",
            "lng": "-8.64435"
        }, {
            "cityName": "a guarda",
            "lat": "41.90131",
            "lng": "-8.87423"
        }, {
            "cityName": "o rosal",
            "lat": "41.93536",
            "lng": "-8.83677"
        }, {
            "cityName": "pontevedra",
            "lat": "42.431",
            "lng": "-8.64435"
        }, {
            "cityName": "barcelona",
            "lat": "41.38879",
            "lng": "2.15899"
        }, {
            "cityName": "madrid",
            "lat": "40.4165",
            "lng": "-3.70256"
        }];

        browser.executeScript("return window.localStorage.setItem('latestSearches', '" + JSON.stringify(recentCitiesSample) + "');");
        browser.get(`${baseUrl}/home`);
    });

    it('should contain MeteoApp on the title', () => {
        expect(browser.getTitle()).toContain('MeteoApp');
    });

    it('should go home when clicking on the weblogo', () => {
        const webLogo = element(by.css('web-logo'));
        webLogo.click();
        expect(browser.getCurrentUrl()).toEqual(`${baseUrl}/home`);
    });

    it('should only display matches when 3 or more characters are typed in', () => {
        const input = element(by.css('md-autocomplete md-autocomplete-wrap input'));
        const matches = element.all(by.css('[md-virtual-repeat="item in $mdAutocompleteCtrl.matches"]'));

        input.sendKeys('Vi');
        expect(matches.count()).toEqual(0);
        input.sendKeys('go');
        expect(matches.count()).toBeGreaterThan(0);
    });

    it('should only go search when there is at least only a valid suggestion ', () => {
        const input = element(by.css('md-autocomplete md-autocomplete-wrap input'));
        const mask = element(by.css('.md-scroll-mask'))
        const button = element(by.id('search-button'));

        input.sendKeys('Vi');
        mask.click();
        button.click();
        expect(browser.getCurrentUrl()).toEqual(`${baseUrl}/home`);
        input.sendKeys('go');
        mask.click();
        button.click();
        expect(browser.getCurrentUrl()).toContain(`${baseUrl}/search`);
    });

    it('should change preferred language', () => {
        const langButton = element(by.id('lang-button'));
        const availableLanguages = element.all(by.css('.md-button.md-fab.md-mini'));

        availableLanguages.each((element, index) => {
            langButton.click();
            availableLanguages.get(index).click();
        });
    });

    it('should go search when an recent element is clicked', () => {
        const recentSearches = element.all(by.css('a.link-effect.spacing-4'));
        recentSearches.get(0).click();
        expect(browser.getCurrentUrl()).toContain(`${baseUrl}/search`);
    });

    it('should delete an item from the recent searches', () => {
        const recentSearchesDel = element.all(by.css('md-icon.material-icons.clear.recent'));
        recentSearchesDel.count().then(startNum => {
            recentSearchesDel.get(0).click();
            expect(recentSearchesDel.count()).toEqual(startNum - 1);
        });
    });
});