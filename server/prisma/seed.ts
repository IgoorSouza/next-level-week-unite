import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: "5bca4864-3ede-4a2d-930e-7ac65d2c0a53",
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento para devs apaixonados por código!",
            maximumAttendees: 120
        } 
    })
}

seed().then(() => {
  console.log("Data base seeded!")
  prisma.$disconnect()
});
