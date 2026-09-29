git st"use client";

import { useFavorites } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Favorit
        </h1>

        <p className="mt-2 text-muted-foreground">
          {favorites.length === 0
            ? "Belum ada pengguna yang kamu favoritkan."
            : `${favorites.length} pengguna ada di daftar favorit kamu.`}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-10 text-center">
          <p className="text-muted-foreground">
            Belum ada pengguna favorit.
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