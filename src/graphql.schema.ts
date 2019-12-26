
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Author {
    id: string;
    name: string;
}

export class Book {
    id: string;
    title?: string;
    author: Author;
}

export abstract class IQuery {
    abstract exampleOne(): Book[] | Promise<Book[]>;
}
