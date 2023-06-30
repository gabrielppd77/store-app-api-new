/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `companies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "companies_userId_key" ON "companies"("userId");
