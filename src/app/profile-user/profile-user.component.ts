import { Component, OnInit } from '@angular/core';

export interface Tile {
    title: string;
    text: string;
}

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
    panelOpenState = false;
    nb = 1;

    tiles: Tile[] = [
        { title: 'One', text: 'lightblue' },
        { title: 'Two', text: 'lightgreen' },
        { title: 'Three', text: 'lightpink' },
        { title: 'Four', text: 'lightpink' },
    ];
    constructor() { }

    ngOnInit() {
    }

    /*ngClassForCarousselItem() {
        this.nb += 1;
        let data = '';
        if (this.nb === 1) {
            data = 'carousel-item active';
        } else {
            data = 'carousel-item';
        }
        return data;
    }*/
    checkNb() {
        this.nb += 1;
    }
}
