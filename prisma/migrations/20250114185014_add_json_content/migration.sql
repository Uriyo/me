/*
  Warnings:

  - You are about to drop the `ArticleTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CodeSnippet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `readingTime` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `content` on the `Article` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "ArticleTag" DROP CONSTRAINT "ArticleTag_articleId_fkey";

-- DropForeignKey
ALTER TABLE "ArticleTag" DROP CONSTRAINT "ArticleTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "CodeSnippet" DROP CONSTRAINT "CodeSnippet_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_articleId_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "readingTime" INTEGER NOT NULL,
ADD COLUMN     "tags" TEXT[],
DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL;

-- DropTable
DROP TABLE "ArticleTag";

-- DropTable
DROP TABLE "CodeSnippet";

-- DropTable
DROP TABLE "Image";
