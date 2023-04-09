
export interface gitPublic{
    
        url: string
        forks_url: string,
        commits_url: string,
        id: string,
        node_id: string,
        git_pull_url: string,
        git_push_url: string
        html_url: string,
        files: FilesGit
        public: boolean,
        created_at: Date,
        updated_at: Date,
        description: string,
        comments: number,
        user: any,
        comments_url: string,
        owner: Owner,
        truncated: boolean
    
}

export interface FilesGit{
    "functionNodeConvert.js": any

}
export interface Owner{
        login:string
        id: number,
        node_id: string,
        avatar_url: string
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url:string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean

}

export interface gitItemsSearch{
    
        name: string,
   owner:Owner
   html_url:string
}



// {
//     "url": "https://api.github.com/gists/badddee1d38a60458f66e5fd0cea46f1",
//     "forks_url": "https://api.github.com/gists/badddee1d38a60458f66e5fd0cea46f1/forks",
//     "commits_url": "https://api.github.com/gists/badddee1d38a60458f66e5fd0cea46f1/commits",
//     "id": "badddee1d38a60458f66e5fd0cea46f1",
//     "node_id": "G_kwDOAS7lC9oAIGJhZGRkZWUxZDM4YTYwNDU4ZjY2ZTVmZDBjZWE0NmYx",
//     "git_pull_url": "https://gist.github.com/badddee1d38a60458f66e5fd0cea46f1.git",
//     "git_push_url": "https://gist.github.com/badddee1d38a60458f66e5fd0cea46f1.git",
//     "html_url": "https://gist.github.com/nobodybutyoulin/badddee1d38a60458f66e5fd0cea46f1",
//     "files": {
//         "functionNodeConvert.js": {
//             "filename": "functionNodeConvert.js",
//             "type": "application/javascript",
//             "language": "JavaScript",
//             "raw_url": "https://gist.githubusercontent.com/nobodybutyoulin/badddee1d38a60458f66e5fd0cea46f1/raw/c5017859fc25b19607453c5d255cc4c42f59b345/functionNodeConvert.js",
//             "size": 615
//         }
//     },
//     "public": true,
//     "created_at": "2023-04-09T10:29:01Z",
//     "updated_at": "2023-04-09T10:29:01Z",
//     "description": "Node-red function node to convert mqtt msg from node-red mqtt in node and prepare to send into mongodb out node",
//     "comments": 0,
//     "user": null,
//     "comments_url": "https://api.github.com/gists/badddee1d38a60458f66e5fd0cea46f1/comments",
//     "owner": {
//         "login": "nobodybutyoulin",
//         "id": 19850507,
//         "node_id": "MDQ6VXNlcjE5ODUwNTA3",
//         "avatar_url": "https://avatars.githubusercontent.com/u/19850507?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/nobodybutyoulin",
//         "html_url": "https://github.com/nobodybutyoulin",
//         "followers_url": "https://api.github.com/users/nobodybutyoulin/followers",
//         "following_url": "https://api.github.com/users/nobodybutyoulin/following{/other_user}",
//         "gists_url": "https://api.github.com/users/nobodybutyoulin/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/nobodybutyoulin/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/nobodybutyoulin/subscriptions",
//         "organizations_url": "https://api.github.com/users/nobodybutyoulin/orgs",
//         "repos_url": "https://api.github.com/users/nobodybutyoulin/repos",
//         "events_url": "https://api.github.com/users/nobodybutyoulin/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/nobodybutyoulin/received_events",
//         "type": "User",
//         "site_admin": false
//     },
//     "truncated": false
// }