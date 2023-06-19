# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#
class User < ApplicationRecord
  before_validation :ensure_session_token
  has_secure_password

  validates :first_name, 
    uniqueness: true, 
    length: { in: 3..30 }

    validates :last_name, 
    uniqueness: true, 
    length: { in: 3..30 }

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  def self.find_by_credentials(email, password) 
    user = User.find_by(email: email)
    if user&.authenticate(password)
        user 
    else 
        nil
    end 
  end 
  

  def reset_session_token! 
    self.session_token = generate_unique_session_token 
    save!
    session_token
  end 

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  private 

  def generate_unique_session_token
    while true
      token = SecureRandom::urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end
end
