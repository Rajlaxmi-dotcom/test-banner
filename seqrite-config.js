
let userLang = (navigator.language || (navigator).userLanguage || 'en').split('-')[0];
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "69df30911fe1fa0d2a5e84cb",
  "uuid": "d4965b2e-05da-4d45-8e85-a4d6e00e7181",
  "domain": "https://devop.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://cookie-consent-enforcement-sdpdev.netlify.app",
  "cookieExpiresAfterDays": 365,
  "default": false,
  "mustConsent": false,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {
    "english": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "en": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "zz": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    }
  },
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": false,
  "groupByPurpose": false,
  "hideToggleAll": false,
  "appName": "SDP Dev Cookie Enforcement",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "SDP Dev Cookie Enforcement",
  "companyAddress": " ",
  "doubleOptIn": {
    "enabled": true,
    "message": "<p>Are you sure you want to opt-in?</p>",
    "messageTextColor": "#43436c",
    "messageBackgroundColor": "#f9f9ff",
    "yesText": "Yes (Opt-in)",
    "yesTextColor": "#f2f2f2",
    "yesBackgroundColor": "#5249EB",
    "noText": "No (Opt-out)",
    "noTextColor": "#7879A1",
    "noBackgroundColor": "#ffffff",
    "goBackText": "Go Back",
    "goBackTextColor": "#f2f2f2",
    "goBackBackgroundColor": "#6c757d"
  },
  "services": [
    {
      "name": "analytics",
      "title": "Analytics",
      "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga",
        "_ga_89RWJTCPLZ"
      ]
    },
    {
      "name": "others",
      "title": "Others",
      "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdpdev.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "https://cookie-consent-enforcement-sdpdev.netlify.app",
        "marketing_id"
      ]
    }
  ]
};

(function setupDoubleOptInFlow() {
  const pollForManager = function(retries) {
    if (!window.klaro || typeof window.klaro.getManager !== 'function') {
      if (retries > 0) {
        setTimeout(function() { pollForManager(retries - 1); }, 200);
      }
      return;
    }

    const manager = window.klaro.getManager();
    if (!manager) {
      if (retries > 0) {
        setTimeout(function() { pollForManager(retries - 1); }, 200);
      }
      return;
    }

    if (manager.__seqriteDoubleOptInPatched) {
      return;
    }

    manager.__seqriteDoubleOptInPatched = true;
    const originalSaveAndApply = manager.saveAndApplyConsents;
    if (typeof originalSaveAndApply !== 'function') {
      return;
    }

    manager.saveAndApplyConsents = function() {
      const cfg = window.klaroConfig && window.klaroConfig.doubleOptIn;
      if (!cfg || !cfg.enabled) {
        return originalSaveAndApply.apply(this, arguments);
      }

      if (document.getElementById('seqrite-double-optin-overlay')) {
        return;
      }

      const saveArgs = arguments;
      const overlay = document.createElement('div');
      overlay.id = 'seqrite-double-optin-overlay';
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:16px;';

      const modal = document.createElement('div');
      modal.style.cssText = 'width:100%;max-width:520px;border-radius:8px;padding:20px;box-shadow:0 10px 28px rgba(0,0,0,0.28);background:' + (cfg.messageBackgroundColor || '#f9f9ff') + ';color:' + (cfg.messageTextColor || '#43436c') + ';';

      const body = document.createElement('div');
      body.style.cssText = 'margin-bottom:18px;line-height:1.5;';
      body.innerHTML = cfg.message || '<p>Are you sure you want to opt-in?</p>';

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap;';

      const makeBtn = function(label, bg, color) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = label;
        btn.style.cssText = 'border:1px solid transparent;border-radius:4px;padding:8px 14px;font-size:14px;cursor:pointer;background:' + bg + ';color:' + color + ';';
        return btn;
      };

      const noButton = makeBtn(
        cfg.noText || 'No (Opt-out)',
        cfg.noBackgroundColor || '#ffffff',
        cfg.noTextColor || '#7879A1'
      );
      const goBackButton = makeBtn(
        cfg.goBackText || 'Go Back',
        cfg.goBackBackgroundColor || '#6c757d',
        cfg.goBackTextColor || '#f2f2f2'
      );
      const yesButton = makeBtn(
        cfg.yesText || 'Yes (Opt-in)',
        cfg.yesBackgroundColor || '#5249EB',
        cfg.yesTextColor || '#f2f2f2'
      );

      const removeModal = function() {
        const existing = document.getElementById('seqrite-double-optin-overlay');
        if (existing) {
          existing.remove();
        }
      };

      yesButton.onclick = function() {
        removeModal();
        originalSaveAndApply.apply(manager, saveArgs);
      };

      noButton.onclick = function() {
        const services = (window.klaroConfig && window.klaroConfig.services) || [];
        if (!manager.consents || typeof manager.consents !== 'object') {
          manager.consents = {};
        }

        services.forEach(function(service) {
          const serviceName = service && service.name;
          if (serviceName) {
            manager.consents[serviceName] = !!service.required;
          }
        });

        removeModal();
        originalSaveAndApply.apply(manager, saveArgs);
      };

      goBackButton.onclick = function() {
        removeModal();
        if (window.klaro && typeof window.klaro.show === 'function') {
          window.klaro.show(window.klaroConfig);
        }
      };

      actions.appendChild(noButton);
      actions.appendChild(goBackButton);
      actions.appendChild(yesButton);

      modal.appendChild(body);
      modal.appendChild(actions);
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
    };
  };

  pollForManager(40);
})();

showCookie();