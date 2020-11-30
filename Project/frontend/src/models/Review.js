export class Review{
    constructor(userId, rating, comment, id=0) {
        this.userId = userId;
        this.rating = rating;
        this.comment = comment;
        this.id = id;
    }
}