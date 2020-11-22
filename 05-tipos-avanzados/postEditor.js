const admin = {
  name: 'Jhon',
  lastName: 'Smith',
  role: [1, 'Admin'],
};

const developer = {
  name: 'Jose',
  lastName: 'Cabrera',
  role: [2, 'Developer'],
};

const editor = {
  name: 'Will',
  lastName: 'Doe',
  role: [3, 'Editor'],
};

const POSTS = [
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

const postLog = {};

function isAdmin(person) {
  if (typeof person === 'undefined') {
    throw new Error('Person should be an object');
  }

  if (typeof person.role === 'undefined') {
    throw new Error('Person has no role');
  }

  const [role, roleName, ...rest] = person.role;

  if (typeof role === 'undefined') {
    throw new Error('Role should be defined');
  }

  if (typeof roleName === 'undefined') {
    throw new Error(`The role ${role} has no name or description`);
  }

  if (typeof rest !== 'undefined' && rest.length) {
    throw new Error('That is not a Tupla, please provide a correct tuple');
  }

  return role === 1 && roleName === 'Admin';
}

function notHasPermissionLog({ name, role }, { title }) {
  console.log(`User ${name} with the role ${role[1]} has no permission to edit the post ${title}`);
}

for (let index = 0; index < POSTS.length; index++) {
  const post = POSTS[index];
  if (isAdmin(post.author)) {
    if (!(post.id in postLog)) {
      postLog[post.id] = {};
      postLog[post.id].oldPost = post;
      postLog[post.id].edittedBy = admin;
      postLog[post.id].edittedAt = Date.now();
      postLog[post.id].newPost = Object.assign({}, post, { title: '¿Es realmente TypeScript útil?', author: admin });
    }
  } else {
    notHasPermissionLog(post.author, post);
  }
}

console.log(postLog);
