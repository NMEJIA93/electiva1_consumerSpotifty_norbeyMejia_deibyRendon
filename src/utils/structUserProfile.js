export const structUserProfile = (user, source = 'spotify') => ({


  uid: user.uid || user.id,
  country: user.country || user.countryCode || 'CO',
  email: user.email || '',
  firstName: user.displayName || user.firstName || user.display_name || 'Usuario',
  profilePicture: user.profilePicture || user.photoURL || (user.images?.[0]?.url) || '',
  followers: user.followers?.total || user.followers || 0,
  subscription: user.subscription || user.product || 'free',
  profileLink: user.profileLink || user.external_urls?.spotify || '',
  type: user.type || 'user',
  id: user.id || user.uid,
  artistsFollowers: user.artistsFollowers || user.artists?.items || [],
  ownPlaylists: user.ownPlaylists || [],
  followedPlaylists: user.followedPlaylists || [],
  connectWithSpotify: source === 'spotify' ? true : false,
  artistsTop: user.artistsTop || [],
  tracksTop: user.tracksTop || [],
  favoriteGenres: user.favoriteGenres || [],
});