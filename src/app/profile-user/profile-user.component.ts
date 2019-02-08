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
}
