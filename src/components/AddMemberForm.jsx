
import { useState } from 'react';
import { z } from 'zod';

const memberSchema = z.object({
    name: z.string().min(3, 'Nama lengkap minimal 3 karakter'),
    email: z.string().email('Format email tidak valid'),
    role: z.string().min(1, 'Wajib memilih salah satu peran tim'),
    bio: z.string()
        .min(10, 'Bio minimal 10 karakter')
        .max(80, 'Bio maksimal 80 karakter')
});

function AddMemberForm({ onAddMember }) {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    bio: ''
});

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = memberSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = {};

            result.error.issues.forEach(issue => {
                fieldErrors[issue.path[0]] = issue.message;
            });

            setErrors(fieldErrors);
            return;
        }

        onAddMember(result.data);

        setFormData({
    name: '',
    email: '',
    role: '',
    bio: ''
});
        setErrors({});
    };

    return (
        <form className="add-member-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Tambah Anggota Tim</h3>

            <div className="form-row">
                <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input
                        name="name"
                        placeholder="Contoh: Rina Wijaya"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && (
                        <span className="error-text">
                            ⚠️ {errors.name}
                        </span>
                    )}
                    <div className="form-group">
    <label>Email</label>
    <input
        type="email"
        name="email"
        placeholder="Contoh: rina@gmail.com"
        value={formData.email}
        onChange={handleChange}
        className={errors.email ? 'input-error' : ''}
    />
    {errors.email && (
        <span className="error-text">
            ⚠️ {errors.email}
        </span>
    )}
</div>
                </div>

                <div className="form-group">
    <label>Bio Singkat</label>
    <input
        type="text"
        name="bio"
        placeholder="Contoh: Passionate in React & Modern UI"
        value={formData.bio}
        onChange={handleChange}
        className={errors.bio ? 'input-error' : ''}
    />
    {errors.bio && (
        <span className="error-text">⚠️ {errors.bio}</span>
    )}
</div>

                <div className="form-group">
                    <label>Minimal Rank</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={errors.role ? 'input-error' : ''}
                    >
                        <option value="">-- Pilih Rank Disini --</option>
                        <option value="Mythical Immortal">Mythical Immortal</option>
                        <option value="Mythical Honor">Mythical Honor</option>
                        <option value="Mythical Mawi">Mythical Mawi</option>
                    </select>

                    {errors.role && (
                        <span className="error-text">
                            ⚠️ {errors.role}
                        </span>
                    )}
                </div>

                <button type="submit" className="btn-submit">
                    + Tambah Anggota
                </button>
            </div>
        </form>
    );
}

export default AddMemberForm;
