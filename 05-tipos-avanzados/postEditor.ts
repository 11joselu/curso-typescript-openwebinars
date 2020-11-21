type Person = {
  name: string;
  lastName: string;
  role: [number, string];
};

const admin: Person = {
  name: 'Jhon',
  lastName: 'Smith',
  role: [1, 'Admin'],
};

const developer: Person = {
  name: 'Jose',
  lastName: 'Cabrera',
  role: [2, 'Developer'],
};

const editor: Person = {
  name: 'Will',
  lastName: 'Doe',
  role: [3, 'Editor'],
};

type BlogPostId = number;

type BlobPost = {
  // first number, then move to own type
  id: BlogPostId;
  title: string;
  createdAt: string;
  author: Person;
};

const POST: Array<BlobPost> = [
  {
    id: 1,
    title: 'Aprender TypeScript',
    createdAt: '03/03/2020',
    author: developer,
  },
  {
    id: 2,
    title: 'Aprender JavaScript',
    createdAt: '18/03/2020',
    author: editor,
  },
  {
    id: 3,
    title: 'Es realmente TypeScript útil?',
    createdAt: '18/05/2020',
    author: admin,
  },
];

type EditedPost = {
  oldPost: BlobPost;
  edittedBy: Person;
  edittedAt: number;
  newPost: BlobPost;
};

const postLog: Record<BlogPostId, EditedPost> = {};

function isAdmin(person: Person): boolean {
  const [role, roleName] = person.role;

  return role === 1 && roleName === 'Admin';
}

function notHasPermissionLog({ name, role }: Person, { title }: BlobPost) {
  console.log(`User ${name} with the role ${role[1]} has no permission to edit the post ${title}`);
}

for (let index = 0; index < POST.length; index++) {
  const post = POST[index];
  if (isAdmin(post.author)) {
    if (!(post.id in postLog)) {
      const editedPost: EditedPost = {
        oldPost: post,
        edittedBy: admin,
        edittedAt: Date.now(),
        newPost: Object.assign({}, post, { title: '¿Es realmente TypeScript útil?', author: admin }),
      };

      postLog[post.id] = editedPost;
    }
  } else {
    notHasPermissionLog(post.author, post);
  }
}

console.log(postLog);
