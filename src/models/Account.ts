import mongoose from 'mongoose';
const { Schema } = mongoose;

interface AccountModel {
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string;
  access_token: string;
  expires_at: string;
  token_type: string;
  scope: string;
  id_token: string;
  session_state: string;
  userId: object;
}

const accountSchema = new Schema<AccountModel>(
  {
    type: {
      type: String,
      required: [true, 'An account must have a type'],
    },
    provider: {
      type: String,
      required: [true, 'An account must have a provider'],
    },
    providerAccountId: {
      type: String,
      required: [true, 'An account must have a provider account id'],
    },
    refresh_token: {
      type: String,
    },
    access_token: {
      type: String,
    },
    expires_at: {
      type: String,
    },
    token_type: {
      type: String,
    },
    scope: {
      type: String,
    },
    id_token: {
      type: String,
    },
    session_state: {
      type: String,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Account =
  mongoose.models.Account || mongoose.model('Account', accountSchema);

export default Account;
