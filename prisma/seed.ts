import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create sample tags
  const tag1 = await prisma.tag.create({ data: { name: 'JavaScript' } });
  const tag2 = await prisma.tag.create({ data: { name: 'Next.js' } });
  const tag3 = await prisma.tag.create({ data: { name: 'Prisma' } });

  // Create a sample author
  const author = await prisma.author.create({
    data: {
      name: 'Kushagra Gangwar',
      email: 'kushagra@example.com',
      bio: 'A passionate web developer and content creator.',
      profileImage: 'https://example.com/profile.jpg',
    },
  });

  // Create a sample article with Markdown content
  const article = await prisma.article.create({
    data: {
      title: 'Introduction to Next.js',
      slug: 'introduction-to-nextjs',
      content: `# Introduction to Next.js\n\nNext.js is a popular React framework for building server-side rendered applications.\n\n## Features\n- File-based routing\n- API routes\n- Server-side rendering\n\n\`\`\`javascript\nconst message = "Hello, Next.js!";\nconsole.log(message);\n\`\`\`\n\n![Next.js Logo](https://example.com/nextjs-logo.jpg)`,
      readingTime: 5,
      publishedAt: new Date(),
      status: 'published',
      authorId: author.id,
      tags: {
        create: [
          { tag: { connect: { id: tag1.id } } },
          { tag: { connect: { id: tag2.id } } },
        ],
      },
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
