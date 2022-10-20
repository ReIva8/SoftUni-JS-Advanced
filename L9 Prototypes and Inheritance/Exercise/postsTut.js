function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        comments = [];

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = [super.toString()];
            result.push(`Rating: ${this.likes - this.dislikes}`);
            if (this.comments.length) {
                result.push('Comments:');
                result.push(this.comments.map(c => ` * ${c}`).join('\n'));
            }
            return result.join('\n')
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++
            return this
        }

        toString() {
            return super.toString() +'\n' + `Views: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}