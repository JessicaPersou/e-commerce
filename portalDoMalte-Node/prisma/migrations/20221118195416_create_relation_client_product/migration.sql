/*
  Warnings:

  - Added the required column `clientId` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `clientId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
