// Types générés depuis l'API OpenAPI TJ-Track

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  error?: string;
}

// Enums
export enum UserRole {
  CLIENT = 'CLIENT',
  COMMERCANT = 'COMMERCANT',
  FOURNISSEUR = 'FOURNISSEUR',
  LIVREUR = 'LIVREUR',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER'
}

export enum StatutCommande {
  EN_ATTENTE = 'EN_ATTENTE',
  CONFIRMEE = 'CONFIRMEE',
  EN_PREPARATION = 'EN_PREPARATION',
  EXPEDIEE = 'EXPEDIEE',
  LIVREE = 'LIVREE',
  ANNULEE = 'ANNULEE'
}

export enum StatutPaiement {
  EN_ATTENTE = 'EN_ATTENTE',
  PAYE = 'PAYE',
  PARTIEL = 'PARTIEL',
  ECHUE = 'ECHUE',
  ECHEC = 'ECHEC',
  REMBOURSE = 'REMBOURSE'
}

export enum ModePaiement {
  CARTE_BANCAIRE = 'CARTE_BANCAIRE',
  PAYPAL = 'PAYPAL',
  VIREMENT = 'VIREMENT',
  ESPECES = 'ESPECES',
  MOBILE_MONEY = 'MOBILE_MONEY',
  CHEQUE = 'CHEQUE'
}

export enum TypeMouvement {
  ENTREE = 'ENTREE',
  SORTIE = 'SORTIE',
  CORRECTION_POSITIVE = 'CORRECTION_POSITIVE',
  CORRECTION_NEGATIVE = 'CORRECTION_NEGATIVE'
}

export enum TypeCampagne {
  MISE_EN_AVANT_SIMPLE = 'MISE_EN_AVANT_SIMPLE',
  MISE_EN_AVANT_PREMIUM = 'MISE_EN_AVANT_PREMIUM',
  BANNIERE_PRINCIPALE = 'BANNIERE_PRINCIPALE',
  CARROUSEL_ACCUEIL = 'CARROUSEL_ACCUEIL'
}

export enum PeriodeTarification {
  JOUR = 'JOUR',
  SEMAINE = 'SEMAINE',
  MOIS = 'MOIS'
}

// Interfaces principales
export interface Adresse {
  id?: number;
  adresse1: string;
  adresse2?: string;
  ville: string;
  codePostal: string;
  pays: string;
}

export interface Entreprise {
  id?: number;
  nom: string;
  description?: string;
  codeFiscal?: string;
  email: string;
  telephone?: string;
  siteWeb?: string;
  adresse?: Adresse;
  createdAt?: string;
}

export interface CategorieDto {
  id?: number;
  code: string;
  designation: string;
  description?: string;
  nombreArticles?: number;
}

export interface ArticleDto {
  id?: number;
  codeArticle: string;
  designation: string;
  description?: string;
  prixUnitaireHt: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  quantiteStock?: number;
  seuilAlerte?: number;
  stockMax?: number;
  categorieId?: number;
  categorieDesignation?: string;
  stockFaible?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProduitEcommerceDto {
  id?: number;
  nom: string;
  description: string;
  descriptionLongue?: string;
  prix: number;
  quantite: number;
  categorieId: number;
  categorieName?: string;
  images?: string[];
  motsCles?: string;
  visibleEnLigne?: boolean;
  nomCommercant?: string;
  nomEntreprise?: string;
  villeCommercant?: string;
  noteMoyenne?: number;
  nombreEvaluations?: number;
  nombreLikes?: number;
  nombreVues?: number;
  nombreVentes?: number;
}

export interface PanierItemDto {
  id?: number;
  articleId: number;
  articleCode?: string;
  articleNom?: string;
  articlePhoto?: string;
  quantite: number;
  prixUnitaire?: number;
  sousTotal?: number;
  stockDisponible?: number;
  disponible?: boolean;
}

export interface PanierDto {
  id?: number;
  userId?: string;
  items?: PanierItemDto[];
  totalItems?: number;
  montantTotal?: number;
  montantHT?: number;
  montantTVA?: number;
}

export interface PanierRequest {
  articleId: number;
  quantite: number;
}

export interface AdresseLivraison {
  nom?: string;
  prenom?: string;
  telephone?: string;
  adresse?: string;
  ville?: string;
  codePostal?: string;
  pays?: string;
  complementAdresse?: string;
}

export interface CommandeItem {
  id?: number;
  article?: ArticleDto;
  quantite: number;
  prixUnitaire?: number;
  sousTotal?: number;
}

export interface Commande {
  id?: number;
  numeroCommande?: string;
  client?: UserEntity;
  items?: CommandeItem[];
  statut?: StatutCommande;
  montantTotal?: number;
  fraisLivraison?: number;
  adresseLivraison?: AdresseLivraison;
  modePaiement?: ModePaiement;
  statutPaiement?: StatutPaiement;
  commentaire?: string;
  dateCommande?: string;
  dateLivraisonPrevue?: string;
  dateLivraisonEffective?: string;
}

export interface UserEntity {
  id?: number;
  userId?: string;
  name: string;
  email: string;
  password?: string;
  isAccountVerified?: boolean;
  isApproved?: boolean;
  roles?: Roles[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Roles {
  id?: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProfileRequest {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  merchantInfo?: MerchantInfo;
  supplierInfo?: SupplierInfo;
  deliveryInfo?: DeliveryInfo;
  clientInfo?: ClientInfo;
}

export interface MerchantInfo {
  shopName: string;
  town: string;
  address: string;
  phoneNumber: string;
  latitude?: number;
  longitude?: number;
}

export interface SupplierInfo {
  shopName: string;
  town: string;
  address: string;
  phoneNumber: string;
  latitude?: number;
  longitude?: number;
}

export interface DeliveryInfo {
  town: string;
  address: string;
  phoneNumber: string;
  latitude?: number;
  longitude?: number;
}

export interface ClientInfo {
  town: string;
  address: string;
  phoneNumber: string;
  latitude?: number;
  longitude?: number;
}

export interface ProfileResponse {
  userId?: string;
  name?: string;
  email?: string;
  isAccountVerified?: boolean;
  isApproved?: boolean;
  roles?: string[];
  phoneNumber?: string;
  enterpriseName?: string;
  town?: string;
  address?: string;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  email: string;
  newPassword: string;
  otp: string;
}

export interface PaiementRequest {
  montant?: number;
  mode?: ModePaiement;
  reference?: string;
}

export interface CampagneRequest {
  produitId?: number;
  typeCampagne?: TypeCampagne;
  periodeTarification?: PeriodeTarification;
  modePaiement?: ModePaiement;
  montantPaye?: number;
}

export interface MouvementStockDto {
  id?: number;
  articleId?: number;
  articleDesignation?: string;
  typeMouvement?: TypeMouvement;
  quantite?: number;
  prixUnitaire?: number;
  motif?: string;
  dateMouvement?: string;
  createdBy?: string;
}

export interface StockAdjustmentRequest {
  quantite?: number;
  motif?: string;
}

// Types pour les détails produit
export interface CommerçantInfo {
  nom?: string;
  entreprise?: string;
  ville?: string;
  noteCommercant?: number;
  nombreVentes?: number;
  telephone?: string;
  adresse?: string;
}

export interface EvaluationDto {
  id?: number;
  nomClient?: string;
  note?: number;
  commentaire?: string;
  dateEvaluation?: string;
  recommande?: boolean;
}

export interface ProduitResumeDto {
  id?: number;
  nom?: string;
  prix?: number;
  imagePrincipale?: string;
  noteMoyenne?: number;
  nombreEvaluations?: number;
}

export interface ProduitDetailDto {
  id?: number;
  nom?: string;
  description?: string;
  descriptionLongue?: string;
  prix?: number;
  prixOriginal?: number;
  quantiteDisponible?: number;
  codeArticle?: string;
  images?: string[];
  imageprincipale?: string;
  categorieId?: number;
  categorieNom?: string;
  commercant?: CommerçantInfo;
  noteMoyenne?: number;
  nombreEvaluations?: number;
  nombreLikes?: number;
  nombreVues?: number;
  nombreVentes?: number;
  evaluations?: EvaluationDto[];
  produitsSimilaires?: ProduitResumeDto[];
  produitsRecommandes?: ProduitResumeDto[];
  motsCles?: string;
  dateMiseEnLigne?: string;
  enStock?: boolean;
  favori?: boolean;
}