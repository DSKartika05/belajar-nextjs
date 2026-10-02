"use client";

import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Favorit</h1>
        <p className="mt-2 text-muted-foreground">
          Daftar pengguna yang kamu simpan sebagai favorit.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <p className="text-muted-foreground">
            Belum ada pengguna yang ditambahkan ke favorit.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}