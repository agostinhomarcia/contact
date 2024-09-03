import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const contacts = await prisma.contact.findMany();
  return NextResponse.json(contacts);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newContact = await prisma.contact.create({
    data,
  });
  return NextResponse.json(newContact);
}

export async function PUT(req: NextRequest) {
  const { id, ...data } = await req.json();
  const updatedContact = await prisma.contact.update({
    where: { id: Number(id) },
    data,
  });
  return NextResponse.json(updatedContact);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await prisma.contact.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Contact deleted' });
}
