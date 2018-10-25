import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name: 'customTitle'
})

export class customTitlePipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value)
            return null;


        let words = value.split(' ');
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 && this.isPreposition(word))
                words[i] = word.toLowerCase();
            else
                words[i] = this.toTitleCase(words[i]);
        }
        return words.join(" ");
    }

    private isPreposition(word: string): boolean {
        let prepositons = [
            "of",
            "the"
        ]
        return prepositons.includes(word.toLowerCase());
    }

    private toTitleCase(word: string): string {
        return word = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
}