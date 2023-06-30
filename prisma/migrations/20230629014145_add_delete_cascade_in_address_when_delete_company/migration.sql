/*
  Warnings:

  - You are about to drop the column `addressId` on the `companies` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[companyId]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_addressId_fkey";

-- DropIndex
DROP INDEX "companies_addressId_key";

-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "companyId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "addressId";

-- CreateIndex
CREATE UNIQUE INDEX "addresses_companyId_key" ON "addresses"("companyId");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
