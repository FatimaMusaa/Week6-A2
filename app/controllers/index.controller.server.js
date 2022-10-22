
import { UserDisplayname } from "../utils/index.js";

export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayname(req)} );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about', displayName: UserDisplayname(req)} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: UserDisplayname(req)} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayname(req)} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayname(req)} );
};


